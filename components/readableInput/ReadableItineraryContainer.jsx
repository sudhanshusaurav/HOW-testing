import { useEffect, useState } from "react";
import IconEdit from "../Icon/IconEdit";
import IconTrash from "../Icon/IconTrash";
import InputLabel from "../inputs/InputLabel";
import dynamic from "next/dynamic";
import CheckboxInput from "../inputs/CheckboxInput";
import DestinationSelectInput from "../admin/selectors/DestinationSelectInput";
import VehicleTypeSelectInput from "../admin/selectors/VehicleTypeSelectInput";
import ActivitySelectInput from "../admin/selectors/ActivitySelectInput";
import { useSelector } from "react-redux";
const EditorInput = dynamic(() => import("@/components/inputs/EditorInput"), {
  ssr: false,
});

function ReadableItineraryContainer({
  destinations,
  countryId,
  index,
  data,
  removeIndex,
  removeData,
  saveData,
  apiResponse,
}) {
  const allDest = useSelector((state) => state.destinations.destinations);
  const [editable, setEditable] = useState(false);
  const [day, setDay] = useState({});

  useEffect(() => {
    setDay(data);
    if (!data.title || !data.overview) {
      setEditable(true);
    }
  }, [data]);

  useEffect(() => {
    if (apiResponse === "success" && data.title && data.overview)
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
                {day?.title}
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
              dangerouslySetInnerHTML={{ __html: day?.overview }}
            ></div>

            <div>
              Meals -{" "}
              <span className="text-gray-500">
                {day?.breakfast ? "Breakfast" : ""}{" "}
                {day?.lunch ? ", Lunch" : ""} {day?.dinner ? ", Dinner" : ""}
              </span>
            </div>
            <div>
              Destinations -{" "}
              {day?.destinations?.map((destination, index) => (
                <span key={destination} className="text-gray-500">
                  {index !== 0 ? ", " : ""}
                  {
                    allDest?.filter((dest) => dest?._id === destination)?.[0]
                      ?.name
                  }
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {editable && (
        <div className="flex items-start gap-4">
          <p className="font-semibold">{index + 1}.</p>
          <div className="flex w-full grow flex-col gap-4">
            <div className="w-full">
              <InputLabel>Title</InputLabel>
              <input
                type="text"
                name=""
                id=""
                className="form-input"
                value={day?.title}
                onChange={(e) =>
                  setDay((day) => ({
                    ...day,
                    title: e.target.value,
                  }))
                }
              />
            </div>

            <div className="w-full">
              <InputLabel>Overview</InputLabel>
              <EditorInput
                value={day?.overview}
                onChange={(data) =>
                  setDay((day) => ({
                    ...day,
                    overview: data,
                  }))
                }
              />
            </div>

            <div>
              <InputLabel>Meals</InputLabel>
              <div className="grid grid-cols-3 gap-4">
                <CheckboxInput
                  id={`breakfast`}
                  checked={day.breakfast}
                  setChecked={(e) =>
                    setDay((day) => ({
                      ...day,
                      breakfast: e.target.checked,
                    }))
                  }
                >
                  {" "}
                  Breakfast
                </CheckboxInput>
                <CheckboxInput
                  id={`lunch`}
                  checked={day.lunch}
                  setChecked={(e) =>
                    setDay((day) => ({
                      ...day,
                      lunch: e.target.checked,
                    }))
                  }
                >
                  {" "}
                  Lunch
                </CheckboxInput>
                <CheckboxInput
                  id={`dinner`}
                  checked={day.dinner}
                  setChecked={(e) =>
                    setDay((day) => ({
                      ...day,
                      dinner: e.target.checked,
                    }))
                  }
                >
                  {" "}
                  Dinner
                </CheckboxInput>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="">
                <InputLabel required={true}>Select Destinations</InputLabel>
                <DestinationSelectInput
                  options={destinations}
                  country={countryId}
                  isMulti={true}
                  value={day.destinations}
                  onChange={(val) => {
                    setDay((day) => ({
                      ...day,
                      destinations: val.map((v) => v.value),
                    }));
                  }}
                />
              </div>
              <div className="">
                <InputLabel required={true}>Select Activities</InputLabel>
                <ActivitySelectInput
                  creatable={true}
                  destination={day.destinations}
                  value={day.activities}
                  onChange={(value) =>
                    setDay((day) => ({
                      ...day,
                      activities: val.map((v) => v.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-6">
              <button
                type="button"
                onClick={day?._id ? removeData : removeIndex}
                className="text-red-500"
              >
                Delete
              </button>
              <button
                onClick={() => saveData(day)}
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

export default ReadableItineraryContainer;
