"use client";

import ClockIcon from "@/public/assets/icons/ClockIcon";
import MapMarkerIcon from "@/public/assets/icons/MapMarker";
import SearchIcon from "@/public/assets/icons/SearchIcon";
import { SearchPackage } from "@/services/web/commonService";
import { formatNumberCommaSeparated } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

function DropdownSearch({ theme }) {
  const pathname = usePathname();

  const [searchResult, setSearchResult] = useState([]);

  const typingRef = useRef();

  useEffect(() => {
    setSearchResult([]);
  }, [pathname]);

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
    <div className="relative z-0">
      <search
        className={`flex gap-2 rounded-full border border-${theme} px-2 py-1`}
      >
        <input
          type="search"
          name=""
          id=""
          onChange={(e) => searchPackage(e.target.value)}
          className="grow rounded-full bg-transparent pl-2 focus:outline-none"
        />
        <div className={`w-[1px] bg-${theme}`}></div>
        <div className={`self-center text-p-lg text-${theme}`}>
          <SearchIcon />
        </div>
      </search>

      {searchResult?.length > 0 && (
        <div className="absolute left-0 top-full z-10 flex max-h-[400px] w-full flex-col gap-4 overflow-auto rounded-lg bg-white p-4 shadow-md">
          {searchResult?.map((result) => (
            <Link
              href={`/package/${result?.countryId?.slug}/${result?.slug}`}
              key={result?._id}
            >
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={result?.images[0]?.fileUrl}
                    alt="banner"
                    width="50"
                    height="50"
                    className="aspect-square w-[50px] rounded-full"
                  />
                </div>

                <div>
                  <h6 className="line-clamp-2 text-p-sm font-medium">
                    {result?.title}
                  </h6>
                  {/* <div className="flex items-center gap-12">
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
                </div> */}
                  <div className="flex items-center gap-1">
                    <p className="text-p-xs text-gray-400">starting from -</p>
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
      )}
    </div>
  );
}

export default DropdownSearch;
