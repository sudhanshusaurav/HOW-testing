"use client";

import { useEffect, useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import IconPlus from "@/components/Icon/IconPlus";
import ActivityForm from "@/app/admin/(private)/activities/ActivityForm";
import Select from "react-select";
import { GetActivityByDestination } from "@/services/activityService";

function ActivitySelectInput({
  destination,
  onChange,
  creatable,
  value,
  isDisabled,
}) {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);

  const handleNewActivity = (activity) => {
    setIsFormModalOpen(false);
    setActivities((activities) => [activity, ...activities]);
  };

  useEffect(() => {
    if (!destination || destination?.length === 0) return;

    GetActivityByDestination(destination)
      .then((res) => {
        setActivities(res.data.data);
      })
      .catch((err) => {
        console.log(err, "erererer===============");
      });
  }, [destination]);

  return (
    <>
      <div className="flex gap-4">
        <div className="grow">
          <div className="flex gap-1">
            <Select
              value={
                value
                  ? value.map((v) => ({
                      label:
                        activities.filter((activity) => activity._id === v)[0]
                          ?.name || "",
                      value: v || "",
                    }))
                  : []
              }
              isMulti={true}
              isDisabled={isDisabled || !destination}
              placeholder="Select Activity"
              options={activities?.map((activity) => ({
                label: activity.name,
                value: activity._id,
              }))}
              onChange={onChange}
              className="w-full"
            />

            {creatable && (
              <button
                type="button"
                onClick={() => setIsFormModalOpen(true)}
                disabled={!destination}
                className="block h-auto rounded-md border border-gray-300 bg-white px-2 disabled:bg-gray-100"
              >
                <IconPlus />
              </button>
            )}
          </div>
        </div>
      </div>
      <Transition appear show={isFormModalOpen} as={Fragment}>
        <Dialog
          as="div"
          open={isFormModalOpen}
          onClose={() => setModal5(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div className="fixed inset-0 z-[999] bg-[black]/60">
            <div className="flex min-h-screen items-start justify-center px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                  <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 shadow-md dark:bg-[#121c2c]">
                    <h5 className="text-lg font-bold">Country</h5>
                    <button
                      onClick={() => setIsFormModalOpen(false)}
                      type="button"
                      className="text-white-dark hover:text-dark"
                    >
                      X
                    </button>
                  </div>
                  <div className="max-h-[75vh] overflow-auto p-5">
                    <ActivityForm onSuccess={handleNewActivity} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ActivitySelectInput;
