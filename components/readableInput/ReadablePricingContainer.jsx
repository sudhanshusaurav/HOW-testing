import { useEffect, useState } from "react";
import IconEdit from "../Icon/IconEdit";
import IconTrash from "../Icon/IconTrash";
import InputLabel from "../inputs/InputLabel";
import MonthMultiSelect from "../admin/selectors/MonthMultiSelect";
import { months } from "@/utils/common";

function ReadablePricingContainer({
  index,
  data,
  removeIndex,
  removeData,
  saveData,
  apiResponse,
  error,
}) {
  const [editable, setEditable] = useState(false);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    setPrices(data);
    if (data?.months?.length === 0 || !data?.price) {
      setEditable(true);
    }
  }, [data]);

  useEffect(() => {
    if (apiResponse === "success" && data?.months?.length !== 0 && data?.price)
      setEditable(false);
  }, [apiResponse]);

  return (
    <div className="w-full">
      {!editable && (
        <div className="group flex items-start gap-4">
          <p className="font-semibold">{index + 1}.</p>
          <div className="flex grow flex-col gap-2">
            <div className="item-start flex gap-4">
              <h6
                onClick={() => setEditable(true)}
                className="grow font-medium"
              >
                {prices?.months?.map((month, index) => (
                  <span key={index}>
                    {index === 0 ? "" : ", "} {months[month]}
                  </span>
                ))}
              </h6>
              {!editable && (
                <div className="invisible flex items-center gap-2 group-hover:visible">
                  <button
                    type="button"
                    onClick={() => setEditable(true)}
                    className="text-secondary"
                  >
                    <IconEdit />
                  </button>
                  <button
                    onClick={removeData}
                    type="button"
                    className="text-red-500"
                  >
                    <IconTrash />
                  </button>
                </div>
              )}
            </div>
            <div
              className="text-p-sm text-gray-500"
              onClick={() => setEditable(true)}
            >
              <span className="line-through">{prices.price}</span>{" "}
              {prices.offerPrice}
            </div>
          </div>
        </div>
      )}

      {editable && (
        <div className="flex items-start gap-4">
          <p className="font-semibold">{index + 1}.</p>
          <div className="flex grow flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <InputLabel>Months</InputLabel>
                <MonthMultiSelect
                  isMulti={true}
                  value={prices.months}
                  onChange={(value) => {
                    setPrices((prices) => ({
                      ...prices,
                      months: value.map((v) => v.value),
                    }));
                  }}
                />
              </div>

              <div className="col-span-1">
                <InputLabel>Price</InputLabel>
                <input
                  type="number"
                  name=""
                  id=""
                  className={`form-input ${error ? "border-red-300" : ""}`}
                  onChange={(e) =>
                    setPrices((prices) => ({
                      ...prices,
                      price: e.target.value,
                    }))
                  }
                  value={prices.price}
                />
              </div>
              <div className="col-span-1">
                <InputLabel>Offer Price</InputLabel>
                <input
                  type="number"
                  name=""
                  id=""
                  className={`form-input ${error ? "border-red-300" : ""}`}
                  onChange={(e) =>
                    setPrices((prices) => ({
                      ...prices,
                      offerPrice: e.target.value,
                    }))
                  }
                  value={prices.offerPrice}
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-6">
              <button
                type="button"
                onClick={data?._id ? removeData : removeIndex}
                className="text-red-500"
              >
                Delete
              </button>
              <button
                onClick={() => saveData(prices)}
                type="button"
                className="text-secondary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadablePricingContainer;
