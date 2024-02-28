import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IconEdit from "../Icon/IconEdit";
import InputLabel from "../inputs/InputLabel";
import MonthMultiSelect from "../admin/selectors/MonthMultiSelect";
import { months } from "@/utils/common";

function ReadableBestTimeToVisit({
  value,
  onChange,
  onBlur,
  error,
  apiResponse,
}) {
  const [editable, setEditable] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const [bestTime, setBestTime] = useState({});

  useEffect(() => {
    if (value?.months?.length === 0 && !value?.description) setEditable(true);

    if (value) setBestTime(value);
  }, [value]);

  useEffect(() => {
    if (
      apiResponse === "success" &&
      value?.months?.length > 0 &&
      value?.description
    )
      setEditable(false);
  }, [apiResponse]);

  return (
    <div>
      <div className="group flex items-center gap-8">
        <InputLabel>Best time to visit</InputLabel>
        {!editable && (
          <button
            title="Edit"
            type="button"
            className="invisible text-p-xs text-secondary group-hover:visible"
            onClick={() => setEditable(true)}
          >
            {<IconEdit />}
          </button>
        )}
      </div>
      {editable && (
        <>
          <div>
            <MonthMultiSelect
              isMulti={true}
              onChange={(value) =>
                setBestTime((bestTime) => ({
                  ...bestTime,
                  months: value.map((v) => v.value),
                }))
              }
              onBlur={() => onBlur(bestTime)}
              value={bestTime.months}
            />
            <p className="text-p-xs text-red-500">{error}</p>
          </div>
          <div className="mt-2">
            <textarea
              type="text"
              name=""
              id=""
              rows={2}
              className={`form-input`}
              onChange={(e) =>
                setBestTime((bestTime) => ({
                  ...bestTime,
                  description: e.target.value,
                }))
              }
              onBlur={() => onBlur(bestTime)}
              value={bestTime.description}
            />
            <p className="text-p-xs text-red-500">{error}</p>
          </div>
        </>
      )}
      {!editable && (
        <>
          <p
            onClick={() => setEditable(disabled ? false : true)}
            className="text-p-sm text-gray-500"
          >
            {bestTime?.months?.map((v, index) => (
              <span key={v}>
                {index !== 0 && ", "}
                {months[v]}
              </span>
            ))}
          </p>
          <p className="text-p-sm text-gray-500">{bestTime?.description}</p>
        </>
      )}
    </div>
  );
}

export default ReadableBestTimeToVisit;
