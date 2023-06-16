import FlightTicketCard from "@components/blocks/cards/FlightTicketCard";
import Button from "@components/elements/button/Button";
import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import DropDown from "@components/elements/dropdown/DropDown";
import { useTranslations } from "next-intl";
import { FlightOffering } from "@lib/interfaces/FlightsInterfaces";

export default function FlightsPage({
  data,
  searchParams,
  locale,
}: {
  data: FlightOffering[];
  searchParams: {
    direction: string;
    class: string;
    adults: string;
    children: string;
    babies: string;
    departure: string;
    return: string;
  };
  locale: "en" | "ar";
}) {
  const t = useTranslations("flights");




  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-secondary-900">
          {t("selectOutbound")}
        </div>

        <div className="sm:hidden">
          <DropDown
            align="end"
            trigger={
              <Button startIcon={<MdFilterListAlt />} roundedFull bg={"ghost"}>
                {t("btns.sort")}
              </Button>
            }
          >
            <div className="w-[10em] flex flex-col gap-1">
              <button className="px-3 py-2 capitalize rounded hover:bg-gray-100">
                {t("btns.stops")}
              </button>
            </div>
          </DropDown>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-6 pb-10">
        {data.map((i, index) => (
          <div key={index}>
            <FlightTicketCard
              ticket={{
                logo: i.validatingCarrier.logo,
                departureTime: i.Departure.time,
                departureLocation: i.Departure.location[locale],
                arrivalTime: i.Arrival.time,
                arrivalLocation: i.Arrival.location[locale],
                price: i.Price.TotalPrice.toString(),
                passengerCount: 1,
                type: searchParams.direction,
                stops: i.totalStops,
                totalDuration: i.totalDuration[locale],
                stopDetails: i.flightSegments,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
