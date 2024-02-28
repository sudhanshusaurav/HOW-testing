import { Dialog, Transition } from "@headlessui/react";
import { useEffect, useState, Fragment } from "react";
import Select from "react-select";
import IconPlus from "@/components/Icon/IconPlus";
import DestinationForm from "@/app/admin/(private)/destinations/DestinationForm";
import { useDispatch, useSelector } from "react-redux";

function DestinationSelectInput({
  creatable,
  country,
  state,
  onChange,
  onBlur,
  value,
  isMulti,
  options,
}) {
  const dispatch = useDispatch();

  const allDest = useSelector((state) => state.destinations.destinations);

  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleNewDestination = (destination) => {
    setAddDestinationModalOpen(false);
    onChange({ value: destination._id, label: destination?.name });
  };

  useEffect(() => {
    if (!country && !state) return;

    if (Array.isArray(state) && state.length > 0) {
      setDestinations(allDest.filter((dest) => state.includes(dest?.stateId)));
    } else if (state && !Array.isArray(state)) {
      setDestinations(allDest.filter((dest) => dest?.stateId === state));
    } else {
      setDestinations(allDest.filter((dest) => dest?.countryId === country));
    }
  }, [country, state, allDest]);

  useEffect(() => {
    if (options?.length === 0 || destinations?.length === 0) return;

    setFilteredDestinations(
      destinations?.filter((dest) => options?.includes(dest?._id))
    );
  }, [options, destinations]);

  return (
    <>
      <div className="w-full grow">
        <div className="flex gap-1">
          <Select
            onChange={onChange}
            onBlur={onBlur}
            isMulti={isMulti}
            value={
              value
                ? isMulti && value
                  ? value?.map((v) => ({
                      value: v,
                      label: destinations.filter((des) => des._id === v)[0]
                        ?.name,
                    }))
                  : {
                      value: value,
                      label: destinations.filter((des) => des._id === value)[0]
                        ?.name,
                    }
                : null
            }
            options={
              filteredDestinations.length > 0
                ? filteredDestinations?.map((destination) => ({
                    label: destination.name,
                    value: destination._id,
                  }))
                : destinations?.map((destination) => ({
                    label: destination.name,
                    value: destination._id,
                  }))
            }
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
                <Dialog.Panel className="panel my-8 w-full max-w-7xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                  <DestinationForm
                    preFillCountry={country}
                    onSuccess={handleNewDestination}
                    closeModal={() => setIsFormModalOpen(false)}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default DestinationSelectInput;
