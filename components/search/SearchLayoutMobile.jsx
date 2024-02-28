"use client";

import ClockIcon from "@/public/assets/icons/ClockIcon";
import CrossIcon from "@/public/assets/icons/CrossIcon";
import MapMarkerIcon from "@/public/assets/icons/MapMarker";
import SearchIcon from "@/public/assets/icons/SearchIcon";
import { SearchPackage } from "@/services/web/commonService";
import {
  blockPageScroll,
  formatNumberCommaSeparated,
  unBlockPageScroll,
} from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

function SearchLayoutMobile({ theme }) {
  const pathname = usePathname();

  const [searchActive, setSearchActive] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const typingRef = useRef();
  const searchInputRef = useRef();

  useEffect(() => {
    setSearchResult([]);
    setSearchActive(false);
  }, [pathname]);

  useEffect(() => {
    if (searchActive) {
      blockPageScroll();
      searchInputRef.current.focus();
    }

    if (!searchActive) unBlockPageScroll();
  }, [searchActive]);

  const searchPackage = (value) => {
    if (value === "") setSearchResult([]);
    console.log(value);

    clearTimeout(typingRef.current);
    typingRef.current = setTimeout(() => {
      SearchPackage(value)
        .then((res) => {
          setSearchResult(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setSearchActive(true)}
        className="text-p-lg text-primary"
      >
        <SearchIcon />
      </button>
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-screen bg-white p-5 transition-all duration-300 ease-out ${
          searchActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between font-medium text-secondary">
            <h6 className="text-p-lg">Search</h6>
            <button onClick={() => setSearchActive(false)} className="">
              <CrossIcon />
            </button>
          </div>

          <search
            className={`flex gap-2 rounded-full border border-${theme} px-2 py-1`}
          >
            <input
              type="search"
              ref={searchInputRef}
              name=""
              id=""
              onChange={(e) => searchPackage(e.target.value)}
              className="grow rounded-full pl-2 focus:outline-none"
            />
            <div className={`w-[1px] bg-${theme}`}></div>
            <div className={`self-center text-p-lg text-${theme}`}>
              <SearchIcon />
            </div>
          </search>

          <div className="flex grow flex-col gap-4 overflow-auto">
            {searchResult?.map((result) => (
              <Link
                href={`/package/${result?.countryId?.slug}/${result?.slug}`}
                key={result?._id}
              >
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={result?.images[0]?.fileUrl}
                      alt="banner"
                      width="100"
                      height="100"
                      className="h-full w-[100px] rounded-md"
                    />
                  </div>

                  <div>
                    <h6 className="font-medium">{result?.title}</h6>
                    <div className="flex items-center gap-12">
                      <div className="flex items-center gap-1 text-p-md capitalize text-gray-500">
                        <MapMarkerIcon className="text-p-xs" />{" "}
                        <span className="text-p-xs text-gray-400">
                          {result?.destinations?.map((dest, index) => (
                            <Fragment key={dest._id}>
                              {dest.name}
                              {index < result.destinations.length - 1 && ", "}
                            </Fragment>
                          ))}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-p-xs text-gray-500">
                        <ClockIcon className="" />{" "}
                        <span className="text-gray-400">
                          {result?.totalNights}N/
                          {result?.totalNights + 1}D
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-p-sm text-gray-400">starting from -</p>
                      <p className="text-p-sm font-medium">
                        ₹{" "}
                        {formatNumberCommaSeparated(
                          result?.pricing.reduce((minPrice, currentPrice) => {
                            const currentMinPrice = Math.min(
                              currentPrice.price,
                              currentPrice.offerPrice
                            );
                            return Math.min(minPrice, currentMinPrice);
                          }, Infinity)
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchLayoutMobile;
