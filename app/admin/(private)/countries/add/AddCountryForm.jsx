"use client";

import CountryForm from "../CountryForm";

import { useDispatch, useSelector } from "react-redux";
import {
  addNewCountry,
  resetNewlyAddedCountry,
  selectNewlyAddedCountry,
  updateCountryById,
} from "@/store/countrySlice";
import { useEffect } from "react";

function AddCountryForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetNewlyAddedCountry());
  }, []);

  const addedCountry = useSelector(selectNewlyAddedCountry);

  const add = (values) => {
    dispatch(addNewCountry(values));
  };

  const update = (values) => {
    values._id = addedCountry._id;
    dispatch(updateCountryById(values));
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b px-5 py-3 dark:bg-[#121c2c]">
        <div className="flex items-center gap-12">
          <h5 className="text-lg font-bold">{"Add Country"}</h5>
        </div>
      </div>
      <CountryForm onSubmit={addedCountry?._id ? update : add} />
    </div>
  );
}

export default AddCountryForm;
