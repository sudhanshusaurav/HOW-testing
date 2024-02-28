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

function SearchLayoutDesktop() {
  const pathname = usePathname();

  const [searchActive, setSearchActive] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const typingRef = useRef();

  useEffect(() => {
    setSearchActive(false);
  }, [pathname]);

  useEffect(() => {
    searchActive ? blockPageScroll() : unBlockPageScroll();
  }, [searchActive]);

  const searchPackage = (value) => {
    if (value === "") setSearchResult([]);
    console.log(value);

    clearTimeout(typingRef.current);
    typingRef.current = setTimeout(() => {
      SearchPackage(value)
        .then((res) => {
          setSearchResult(res.data.data);
          console.log(res, "rerererere=========");
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  };

  return (
    <div className="relative z-10">
      <button
        onClick={() => setSearchActive(!searchActive)}
        className="btn btn-primary rounded-full p-[0.625rem]"
      >
        <SearchIcon />
      </button>
      <div
        className={`fixed right-0 top-0 flex h-screen justify-end bg-black/50 transition-all duration-500 ease-out ${
          searchActive ? "w-full" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex h-full w-[500px] flex-col gap-8 bg-white p-8">
          <div className="flex items-center gap-4">
            <search className="flex w-full">
              <input
                id="iconRight"
                type="search"
                placeholder="Search"
                onChange={(e) => searchPackage(e.target.value)}
                className="form-input rounded-r-none border-r-0 ltr:rounded-r-none rtl:rounded-l-none"
              />
              <div className="flex items-center justify-center rounded-r-md border border-[#e0e6ed] bg-[#eee] px-3 text-p-lg font-semibold text-primary ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                <SearchIcon />
              </div>
            </search>
            <button onClick={() => setSearchActive(false)} className="">
              <CrossIcon />
            </button>
          </div>

          <div className="flex flex-col gap-4">
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
    </div>
  );
}

export default SearchLayoutDesktop;
