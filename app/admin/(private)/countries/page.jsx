"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPageTitle } from "@/store/themeConfigSlice";

import CountryList from "./CountryList";
import { SelectAllCountries, fetchCountryStatus } from "@/store/countrySlice";

function Page() {
  const countries = useSelector(SelectAllCountries);
  const status = useSelector(fetchCountryStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Countries"));
  });

  return status === "success" ? (
    <div className="h-full flex-1 overflow-x-hidden p-0">
      <CountryList countries={countries} />
    </div>
  ) : (
    <div className="panel">Loading...</div>
  );
}

export default Page;
