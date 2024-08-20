import React from "react";
import Card from "./card";
import { PiArrowRightDuotone } from "react-icons/pi";

const LatestNieuws = () => {
  const items = [
    {
      image: "jpg/phone-img.jpg",
      title: "Telefoonstoring",
      description: "Update: Telefoonstoring verholpen",
      subText: "5 maart 2024",
    },
    {
      image: "jpg/themometer-img.jpg",
      title: "Energiebesparing - Wat doet KnusWonen?",
      description: "KnusWonen werkt hard aan het energiezuiniger maken van ...",
      subText: "17 februari 2024",
    },
    {
      image: "jpg/building-img.jpg",
      title: "Energietoeslag: Heeft u er recht op?",
      description:
        "Steeds meer mensen hebben moeite om hun energierekening te ...",
      subText: "30 januari 2024",
    },
  ];
  return (
    <div className="bg-[var(--background-alt)] h-[572px] flex flex-col justify-center px-6 items-center">
      <div className="flex flex-col gap-4 w-full">
        <p className="text-[var(--primary)] text-[32px] leading-[39.04px] font-overlock font-medium">
          Laatste nieuws
        </p>
        <div className="flex gap-6 items-center w-full overflow-x-auto py-4">
          {items.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
        <article className="flex gap-2 items-center text-[14px] bottom-[12px] justify-end cursor-pointer">
          <p className="text-[var(--primary)] font-bold">
            Bekijk alle nieuwsberichten
          </p>
          <PiArrowRightDuotone className="text-[var(--secondary)] mt-1" />
        </article>
      </div>
    </div>
  );
};

export default LatestNieuws;
