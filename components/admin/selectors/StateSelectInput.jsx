import { useState, Fragment } from "react";
import Select from "react-select";
import StateForm from "@/app/admin/(private)/states/StateForm";
import { Dialog, Transition } from "@headlessui/react";
import IconPlus from "@/components/Icon/IconPlus";

function StateSelectInput({
  creatable,
  states,
  onChange,
  onBlur,
  isMulti,
  isDisabled,
  value,
}) {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleNewState = (state) => {
    setAddStateModalOpen(false);
  };

  return (
    <>
      <div className="grow">
        <div className="flex gap-1">
          <Select
            onChange={onChange}
            onBlur={onBlur}
            value={
              isMulti && value
                ? value?.map((v) => ({
                    value: v,
                    label: states?.find((state) => state._id === v)?.name,
                  }))
                : {
                    value: value,
                    label: states?.find((state) => state._id === value)?.name,
                  }
            }
            isMulti={isMulti}
            isDisabled={isDisabled}
            placeholder="Select State"
            options={states?.map((st) => ({
              label: st.name,
              value: st._id,
            }))}
            className="w-full"
          />

          {creatable && (
            <button
              type="button"
              onClick={() => setIsFormModalOpen(true)}
              className="block h-auto rounded-md border border-gray-300 bg-white px-2"
            >
              <IconPlus />
            </button>
          )}
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
                    <h5 className="text-lg font-bold">Add State</h5>
                    <button
                      onClick={() => setIsFormModalOpen(false)}
                      type="button"
                      className="text-white-dark hover:text-dark"
                    >
                      X
                    </button>
                  </div>
                  <div className="max-h-[75vh] overflow-auto p-5">
                    <StateForm onSuccess={handleNewState} />
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

export default StateSelectInput;
