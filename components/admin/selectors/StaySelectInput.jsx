"use client";

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import HeadingMedium from "@/components/typos/HeadingMedium";
import StayForm from "../../../app/admin/(private)/stays/StayForm";
import DestinationSelectInput from "./DestinationSelectInput";
import SelectInput from "@/components/inputs/SelectInput";
import { GetStayByDestinationId } from "@/services/stayService";

function StaySelectInput({
  country,
  state,
  onChange,
  destination,
  defaultValue,
  onDestinationChange,
}) {
  const [addStayModalOpen, setAddStayModalOpen] = useState(false);
  const [stays, setStays] = useState([]);

  const getStayByDestination = (destinationId) => {
    GetStayByDestinationId(destinationId)
      .then((res) => {
        setStays(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDestinationChange = (value) => {
    onDestinationChange(value);
    getStayByDestination(value.value);
  };

  const handleNewStay = (stay) => {
    setAddStayModalOpen(false);
  };

  useEffect(() => {
    if (!destination) return;
    getStayByDestination(destination);
  }, [destination]);

  return (
    <>
      <div className="flex gap-4">
        <DestinationSelectInput
          country={country}
          state={state}
          onChange={handleDestinationChange}
          value={destination}
        />

        <div className="grow">
          <label htmlFor="" className="font-semibold">
            Stay Name
          </label>
          <div className="flex gap-1">
            <SelectInput
              defaultValue={{
                value: defaultValue,
                label: stays.filter((stay) => stay._id === defaultValue)[0]
                  ?.name,
              }}
              onChange={onChange}
              options={stays?.map((stay) => ({
                label: stay.name,
                value: stay._id,
              }))}
            />
            <button
              type="button"
              onClick={() => setAddStayModalOpen(true)}
              className="block h-auto rounded-md border border-gray-300 bg-white px-2"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={addStayModalOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Stay Modal"
      >
        <div className="flex items-center justify-between border-b border-primary pb-4">
          <HeadingMedium className="text-primary">Add Stay</HeadingMedium>
          <button type="button" onClick={() => setAddStayModalOpen(false)}>
            <MdClose />
          </button>
        </div>
        <div>
          <StayForm onSuccess={handleNewStay} />
        </div>
      </Modal>
    </>
  );
}

export default StaySelectInput;
