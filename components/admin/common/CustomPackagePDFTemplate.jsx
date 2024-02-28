import React, { forwardRef, useEffect, useRef, useState } from "react";
import Logo from "@/../public/assets/images/logo/logo-large.png";
import LogoSmall from "@/../public/assets/images/logo/logo-small.png";
import Image from "next/image";
import HeadingMedium from "@/components/typos/HeadingMedium";
import { useImperativeHandle } from "react";
import { formatINR, formatNumberToTwoDigit } from "@/utils/common";
import { FaHotel, FaWhatsapp } from "react-icons/fa";
import DiverseDestination from "@/../public/assets/images/icons/globe.png";
import ValueForMoney from "@/../public/assets/images/icons/get-money.png";
import BeautifulDestinations from "@/../public/assets/images/icons/flag.png";
import NoHiddenFees from "@/../public/assets/images/icons/money.png";
import moment from "moment";

const CustomPackagePDFTemplate = forwardRef((props, ref) => {
  const containerToConvertRef = useRef();

  const [finalCost, setFinalCost] = useState(0);
  const [dueDate, setDueDate] = useState();
  const [remainingDay, setRemainingDay] = useState(0);

  useImperativeHandle(ref, () => ({
    getContainerHeight() {
      if (containerToConvertRef.current) {
        return containerToConvertRef.current.clientHeight + 20;
      }
    },
  }));

  useEffect(() => {
    if (!props.customPackage) return;

    let cost = props.customPackage.cost;

    if (props.customPackage.tax > 0) {
      cost += (cost * props.customPackage.tax) / 100;
    }

    if (props.customPackage.tcs > 0) {
      cost += (cost * props.customPackage.tcs) / 100;
    }

    setFinalCost(cost);

    let rd = moment(props.customPackage.startDate).diff(
      props.customPackage.createdAt,
      "days",
    );

    setRemainingDay(rd);

    if (rd > 30) {
      setDueDate(
        moment(props.customPackage.startDate)
          .subtract(30, "days")
          .format("DD MMM, YYYY"),
      );
    } else {
      setDueDate(
        moment(props.customPackage.createdAt)
          .add(1, "days")
          .utcOffset("+05:30")
          .format("DD MMM, YYYY"),
      );
    }
  }, [props.customPackage]);

  return (
    <>
      {/* {JSON.stringify(props.customPackage)} */}
      {props.customPackage && (
        <div ref={containerToConvertRef} className="max-w-[600px]">
          <div className="bg-primary/20 p-4 py-12 text-center">
            <div className="mx-auto mt-4 w-[200px]">
              <Image
                src={Logo}
                alt="logo"
                width={200}
                height={80}
                className="w-full"
              />
            </div>
            <div className="mt-4">
              <HeadingMedium className="mb-2">
                Welcome, {props.customPackage.clientName}
              </HeadingMedium>
              <p>Your hassle-free holiday starts here.</p>
            </div>
          </div>

          <div className="p-4">
            <div className="overflow-hidden rounded-lg border border-primary/30 bg-white">
              <table className="w-full table-auto">
                <tbody>
                  <tr>
                    <td className="pb-4 pl-4 font-bold uppercase">visiting:</td>
                    <td className="pb-4 font-semibold">Manali</td>
                  </tr>
                  <tr className="bg-primary/10">
                    <td className="pb-4 pl-4 font-bold uppercase">
                      Departure:
                    </td>
                    <td className="pb-4 font-semibold">24 May, 2023</td>
                  </tr>
                  <tr>
                    <td className="pb-4 pl-4 font-bold uppercase">Duration:</td>
                    <td className="pb-4 font-semibold">
                      {props.customPackage.totalNights} Nights,{" "}
                      {props.customPackage.totalNights + 1} Days
                    </td>
                  </tr>
                  <tr className="bg-primary/10">
                    <td className="pb-4 pl-4 font-bold uppercase">
                      Travellers:
                    </td>
                    <td className="pb-4 font-semibold">24 May, 2023</td>
                  </tr>
                  <tr className="">
                    <td className="pb-4 pl-4 font-bold uppercase">Included:</td>
                    <td className="pb-4 font-semibold">Hotels</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4">
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="text-lg font-semibold text-gray-500">
                    Total Cost Includes{" "}
                    <span
                      className={
                        props.customPackage.packageType === "international"
                          ? ""
                          : "hidden"
                      }
                    >
                      TCS &
                    </span>{" "}
                    taxes dated on{" "}
                    <span className="text-gray-700">24 aug, 2023</span>
                  </td>
                  <td className="text-4xl w-1/2 text-right font-bold">
                    {formatINR(finalCost)}
                    {/* {parseInt(props.customPackage.service_charge_percent) > 0 && <div className="text-right text-sm mt-1">
                                        {props.customPackage.service_charge_percent}% Service charge applied.
                                    </div>} */}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-4 text-center">
              <a
                href=""
                target="_blank"
                className="btn-primary block w-full !pb-4 !pt-0"
              >
                Pay & Book
              </a>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-lg border-2 border-primary/20 bg-primary/10 p-4">
              <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                <Image src={LogoSmall} alt="logo" className="mx-8 w-[75px]" />
                <div className="font-semibold text-gray-500">
                  <p className="uppercase">curated By</p>
                  <h2 className="text-xl font-bold text-gray-700">
                    HoldOnWorld
                  </h2>
                  <p>
                    <span className="font-bold text-gray-700">500+</span> Trips
                    Planned
                  </p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <p className="text-xl pb-4 font-semibold">
                  For any queries or request
                </p>
                <a
                  target="_blank"
                  href={`https://wa.me/${`9876543210`}?text=Hello Wraveler`}
                  className="block rounded-lg border border-primary/30 bg-white pb-4 pt-0 font-semibold uppercase text-primary"
                >
                  <FaWhatsapp className="-pb-4 -mb-4 inline-block" /> WhatsApp
                  Me
                </a>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="container mx-auto px-4 lg:px-0">
              <h2 className="text-3xl mb-4 text-center font-comfortaa">
                Why Choose Us?
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="grow basis-[45%] rounded-lg bg-white lg:basis-[20%]">
                  <div className=" px-4 py-8 text-center">
                    <Image
                      src={DiverseDestination}
                      alt=""
                      className="mx-auto mb-4 max-w-[80px]"
                    />
                    <h3 className="text-lg">Diverse Destination</h3>
                  </div>
                </div>
                <div className="grow basis-[45%] rounded-lg bg-white lg:basis-[20%]">
                  <div className=" px-4 py-8 text-center">
                    <Image
                      src={ValueForMoney}
                      alt=""
                      className="mx-auto mb-4 max-w-[80px]"
                    />
                    <h3 className="text-lg">Value for Money</h3>
                  </div>
                </div>
                <div className="grow basis-[45%] rounded-lg bg-white lg:basis-[20%]">
                  <div className=" px-4 py-8 text-center">
                    <Image
                      src={BeautifulDestinations}
                      alt=""
                      className="mx-auto mb-4 max-w-[80px]"
                    />
                    <h3 className="text-lg">Beautiful places</h3>
                  </div>
                </div>
                <div className="grow basis-[45%] rounded-lg bg-white lg:basis-[20%]">
                  <div className=" px-4 py-8 text-center">
                    <Image
                      src={NoHiddenFees}
                      alt=""
                      className="mx-auto mb-4 max-w-[80px]"
                    />
                    <h3 className="text-lg">No Hidden fees</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="text-left">
              <Image
                src={props.customPackage.bannerImage}
                width={550}
                height={100}
                alt="banner"
                className="h-auto w-full rounded-lg"
              />
              <h2 className="text-2xl mt-4 font-bold">
                {props.customPackage.title}
              </h2>
              <div
                className="pb-4"
                dangerouslySetInnerHTML={{
                  __html: props.customPackage.description,
                }}
              ></div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-lg border border-primary/30 bg-white p-4">
              {/* <p className='px-4 text-primary text-[10px]'>HoldOnWorld</p> */}
              <h2 className="text-2xl rounded-t-lg font-bold uppercase text-primary/80">
                Hotels
              </h2>
              <div className="p-4 text-center">
                {props.customPackage.stays?.map((stay, index) => {
                  return (
                    <div key={index} className="pb-4">
                      <div className="flex">
                        <div className="flex w-[150px] justify-center rounded-lg">
                          {stay.image && (
                            <img
                              src={stayImages[index]}
                              alt=""
                              className="mt-4 max-h-[100px] w-full  rounded-lg"
                            />
                          )}
                          {!stay.image && (
                            <FaHotel className="text-6xl mt-4  text-gray-400" />
                          )}
                        </div>
                        <div className="w-[450px] grow pl-4 text-left">
                          <h2 className="text-lg font-bold">
                            {stay.stayId?.name} -{" "}
                            {stay.stayId.destinationId?.name} / Similar
                          </h2>
                          <p className="text-sm mb-1 font-semibold">
                            {moment(stay.checkInDate).format("DD MMM, YYYY")} -{" "}
                            {moment(stay.checkOutDate).format("DD MMM, YYYY")}
                          </p>
                          {stay.rooms.map((room, index) => {
                            return (
                              <div
                                key={index}
                                className={`flex items-center gap-2 capitalize`}
                              >
                                <p className="text-sm font-semibold">
                                  {room.room} -
                                </p>
                                <div className="text-xs text-gray-500">
                                  ({formatNumberToTwoDigit(room.adults)} Adults
                                  <span
                                    className={`${
                                      room.children ? "" : "hidden"
                                    }`}
                                  >
                                    {" "}
                                    , {formatNumberToTwoDigit(
                                      room.children,
                                    )}{" "}
                                    Children
                                  </span>
                                  <span
                                    className={`${
                                      room.infants ? "" : "hidden"
                                    }`}
                                  >
                                    , {formatNumberToTwoDigit(room.infants)}{" "}
                                    Infants
                                  </span>
                                  )
                                </div>
                              </div>
                            );
                          })}

                          {stay?.stayId?.ameneties?.length > 0 && (
                            <p className="text-sm text-gray-500">
                              <span className="font-semibold text-gray-700">
                                Ameneties -
                              </span>{" "}
                              {stay.stayId.ameneties.map(
                                (amenety) => `${amenety?.name}, `,
                              )}
                            </p>
                          )}
                          {stay.stayId.highlights && (
                            <div className="flex gap-2">
                              <span className="font-semibold text-gray-700">
                                Highlights -
                              </span>
                              <div
                                className="text-sm mt-1 text-gray-500"
                                dangerouslySetInnerHTML={{
                                  __html: stay.stayId.highlights,
                                }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-lg border border-primary/30 bg-white p-4">
              <h2 className="text-2xl rounded-t-lg font-bold uppercase text-primary/80">
                Itinerary
              </h2>

              <div className="pb-4">
                {props.customPackage.itineraryDays.map((day, index) => {
                  return (
                    <div key={day.id}>
                      <h2 className="text-xl mt-4 bg-primary/10 p-4 pt-0 font-bold">
                        {moment(props.customPackage.startDate)
                          .add(index, "days")
                          .utcOffset("+05:30")
                          .format("DD MMM, ddd")}{" "}
                        | Day {index + 1}
                      </h2>
                      <div className="px-4">
                        <h3 className="text-lg my-2 font-bold">{day.title}</h3>
                        <div
                          dangerouslySetInnerHTML={{ __html: day.description }}
                        ></div>

                        {(day.breakfast || day.lunch || day.dinner) && (
                          <div className="pt-4">
                            <span className="font-bold uppercase">
                              included -{" "}
                            </span>
                            <span
                              className={`font-semibold ${
                                day.breakfast ? "" : "hidden"
                              }`}
                            >
                              BreakFast
                            </span>
                            <span
                              className={`font-semibold ${
                                day.lunch ? "" : "hidden"
                              }`}
                            >
                              <span className={day.breakfast ? "" : "hidden"}>
                                ,{" "}
                              </span>
                              Lunch
                            </span>
                            <span
                              className={`font-semibold ${
                                day.dinner ? "" : "hidden"
                              }`}
                            >
                              <span
                                className={
                                  day.breakfast || day.lunch ? "" : "hidden"
                                }
                              >
                                ,{" "}
                              </span>
                              Dinner
                            </span>
                          </div>
                        )}

                        {day.activityId && (
                          <div className="py-2">
                            <span className="font-bold uppercase">
                              Activity
                            </span>
                            <div className="flex gap-2">
                              <div className="w-[150px] shrink-0 basis-[150px] pt-4">
                                <Image
                                  src={day.activityId?.images?.[0]}
                                  width={150}
                                  height={100}
                                  alt="activity-image"
                                  className="rounded-lg"
                                />
                              </div>
                              <div className="">
                                <h2 className="text-lg font-semibold">
                                  {day.activityId?.name}{" "}
                                  <span className="text-sm">
                                    ({day.activityId.type?.name})
                                  </span>
                                </h2>
                                {day.activityId.description && (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: day.activityId.description,
                                    }}
                                  ></div>
                                )}
                                {day.activityId.highlights && (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: day.activityId.highlights,
                                    }}
                                  ></div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {day.transferType && (
                          <div className="pb-4">
                            <h2 className="text-lg font-bold">Transfers</h2>
                            <div className="flex gap-2">
                              <div className="w-[150px] pt-4">
                                <Image
                                  src={day.transferType.image}
                                  width={100}
                                  height={70}
                                  alt="transfer-image"
                                />
                              </div>
                              <div className="">
                                <h2 className="text-lg font-semibold">
                                  {day.transferType.type}
                                </h2>
                                {/* {day.transferType.highlights && <p>{day.transferType.highlights}</p>} */}
                                {day.transferFrom && (
                                  <p className="capitalize">
                                    From - {day.transferFrom}
                                  </p>
                                )}
                                {day.transferTo && (
                                  <p className="capitalize">
                                    To - {day.transferTo}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {day.note && (
                          <div className="flex gap-2">
                            <p className="font-bold">Note - </p>
                            <div
                              dangerouslySetInnerHTML={{ __html: day.note }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="inclusions p-4">
            <div className="rounded-lg border border-primary/30 bg-green-50 p-4">
              <h2 className="text-2xl rounded-t-lg font-bold uppercase text-green-500">
                Inclusions
              </h2>
              <div
                className="rounded-b-lg pb-4 text-green-500"
                dangerouslySetInnerHTML={{
                  __html: props.customPackage.inclusions,
                }}
              ></div>
            </div>
          </div>

          <div className="exclusions p-4">
            <div className="rounded-lg border border-primary/30 bg-red-50 p-4">
              <h2 className="text-2xl rounded-t-lg font-bold uppercase text-red-500">
                Exclusions
              </h2>
              <div
                className="rounded-b-lg pb-4 text-red-500"
                dangerouslySetInnerHTML={{
                  __html: props.customPackage.exclusions,
                }}
              ></div>
            </div>
          </div>

          <div className="p-4">
            <div>
              <table className="w-full table-fixed overflow-hidden rounded-lg text-center">
                <thead className="border-2 bg-gray-200">
                  <th className="text-lg p-4">Installment No</th>
                  <th className="text-lg p-4">Amount</th>
                  <th className="text-lg p-4">Due Date</th>
                </thead>
                <tbody>
                  {remainingDay > 30 && (
                    <tr>
                      <td className="text-lg border-2 pb-4 font-semibold text-gray-600">
                        Installment 1
                      </td>
                      <td className="text-lg border-2 pb-4 font-semibold text-gray-600">
                        {formatINR(props.customPackage.bookingAmount)}
                      </td>
                      <td className="text-lg border-2 pb-4 font-semibold text-gray-600">
                        {moment(props.customPackage.createdAt)
                          .add(1, "days")
                          .utcOffset("+05:30")
                          .format("DD MMM, YYYY")}
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td className="text-lg rounded-bl-lg border-2 pb-4 font-semibold text-gray-600">
                      Installment <span>{remainingDay > 30 ? "2" : "1"}</span>
                    </td>
                    <td className="text-lg border-2 pb-4 font-semibold text-gray-600">
                      {remainingDay > 30
                        ? formatINR(
                            finalCost - props.customPackage.bookingAmount,
                          )
                        : formatINR(finalCost)}
                    </td>
                    <td className="text-lg rounded-br-lg border-2 pb-4 font-semibold text-gray-600">
                      {dueDate}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-4">
              <table className="table-fixed">
                <tbody>
                  <tr>
                    <td className="text-lg py-4 font-semibold text-gray-500">
                      Total Cost Includes{" "}
                      <span
                        className={
                          props.customPackage.packageType === "international"
                            ? ""
                            : "hidden"
                        }
                      >
                        TCS &
                      </span>{" "}
                      taxes dated on{" "}
                      <span className="text-gray-700">
                        {/* {getReadableDate(props.customPackage?.created_at)} */}
                      </span>
                    </td>
                    <td className="text-4xl w-1/2 text-right align-middle font-bold">
                      {formatINR(finalCost)}
                      {/* {parseInt(props.customItinerary.service_charge_percent) > 0 && <div className="text-right text-sm mt-1">
                                        {props.customItinerary.service_charge_percent}% Service charge applied.
                                    </div>} */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href=""
              target="_blank"
              className="btn-primary block w-full !pb-4 !pt-0 text-center"
            >
              Pay & Book
            </a>
          </div>

          {props.customPackage.packageNote && (
            <div className="p-4">
              <div className="rounded-lg border border-primary/30 bg-white p-4">
                <h2 className="text-2xl rounded-t-lg font-bold uppercase">
                  important to know
                </h2>
                <div
                  className="pb-4"
                  dangerouslySetInnerHTML={{
                    __html: props.customPackage.packageNote,
                  }}
                ></div>
              </div>
            </div>
          )}

          {props.customPackage.paymentPolicy && (
            <div className="p-4">
              <div className="rounded-lg border border-primary/30 bg-white p-4">
                <h2 className="text-2xl rounded-t-lg font-bold uppercase">
                  Payment Policy
                </h2>
                <div
                  className="pb-4"
                  dangerouslySetInnerHTML={{
                    __html: props.customPackage.paymentPolicy,
                  }}
                ></div>
              </div>
            </div>
          )}

          {props.customPackage.cancellationPolicy && (
            <div className="p-4">
              <div className="rounded-lg border border-primary/30 bg-white p-4">
                <h2 className="text-2xl rounded-t-lg font-bold uppercase">
                  Cancellation Policy
                </h2>
                <div
                  className="pb-4"
                  dangerouslySetInnerHTML={{
                    __html: props.customPackage.cancellationPolicy,
                  }}
                ></div>
              </div>
            </div>
          )}

          {props.customPackage.visaPolicy && (
            <div className="p-4">
              <div className="rounded-lg border border-primary/30 bg-white p-4">
                <h2 className="rounded-lg border border-primary/30 bg-white p-4">
                  Visa Policy
                </h2>
                <div
                  className="pb-4"
                  dangerouslySetInnerHTML={{
                    __html: props.customPackage.visaPolicy,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
});

// Set the displayName for the component
CustomPackagePDFTemplate.displayName = "CustomPackagePDFTemplate";

export default CustomPackagePDFTemplate;
