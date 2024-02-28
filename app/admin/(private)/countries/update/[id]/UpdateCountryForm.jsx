"use client";

import { useState } from "react";
import CountryForm from "../../CountryForm";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectCountryById, updateCountryById } from "@/store/countrySlice";
// import { getPackageCountByCountryId } from "@/store/packageSlice";
// import { getDestinationCountByCountryId } from "@/store/destinationSlice";

function UpdateCountryForm() {
  const params = useParams();

  const dispatch = useDispatch();

  const countryId = params.id;

  const country = useSelector((state) => selectCountryById(state, countryId));

  // const packageCount = useSelector((state) =>
  //   getPackageCountByCountryId(state, countryId)
  // );

  // const destinationCount = useSelector((state) =>
  //   getDestinationCountByCountryId(state, countryId)
  // );

  const onSubmit = (values) => {
    values._id = country._id;
    dispatch(updateCountryById(values));
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b px-5 py-3 dark:bg-[#121c2c]">
        <div className="flex items-center gap-12">
          <h5 className="text-lg font-bold">
            {country?.name ? `Update ${country?.name}` : "Update Country"}
          </h5>

          {/* <div className="flex items-center gap-6 text-p-sm">
            <p>
              <span className="rounded-full bg-primary p-1 text-p-xs font-medium text-white">
                {destinationCount < 10
                  ? `0${destinationCount}`
                  : destinationCount}
              </span>{" "}
              Destinations
            </p>
            <p>
              <span className="rounded-full bg-secondary p-1 text-p-xs font-medium text-white">
                {packageCount < 10 ? `0${packageCount}` : packageCount}
              </span>{" "}
              Packages
            </p>
          </div> */}
        </div>
      </div>
      <CountryForm formData={country} onSubmit={onSubmit} />
    </div>
  );
}

export default UpdateCountryForm;
