"use client";

import { useState, Fragment } from "react";
import Select from "react-select";
import IconPlus from "@/components/Icon/IconPlus";
import CountryForm from "@/app/admin/(private)/countries/CountryForm";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import CrossIcon from "@/public/assets/icons/CrossIcon";

function CountrySelectInput({
  creatable,
  countries,
  onChange,
  value,
  isDisabled,
  onBlur,
}) {
  const dispatch = useDispatch();

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleNewCountry = (country) => {
    setIsFormModalOpen(false);
  };

  return (
    <>
      <div className="w-full grow">
        <div className="flex gap-1">
          <Select
            value={{
              label:
                countries?.filter((country) => country._id === value)[0]
                  ?.name || "",
              value: value || "",
            }}
            isDisabled={isDisabled}
            placeholder="Select Country"
            options={countries?.map((country) => ({
              label: country.name,
              value: country._id,
            }))}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full"
          />

          {creatable && (
            <button
              type="button"
              onClick={() => setAddCountryModalOpen(true)}
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
                    <h5 className="text-lg font-bold">Country</h5>
                    <button
                      onClick={() => setIsFormModalOpen(false)}
                      type="button"
                      className="text-white-dark hover:text-dark"
                    >
                      <CrossIcon />
                    </button>
                  </div>
                  <div className="max-h-[75vh] overflow-auto p-5">
                    <CountryForm onSuccess={handleNewCountry} />
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

export default CountrySelectInput;
