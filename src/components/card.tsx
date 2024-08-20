/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiArrowRightDuotone } from "react-icons/pi";
interface Props {
  image: string;
  title: string;
  description: string;
  subText: string;
}
const Card = ({ image, title, description, subText }: Props) => {
  return (
    <div className="bg-white overflow-hidden w-[288px] h-[336px] rounded-2xl relative">
      <div className="h-[160px] overflow-hidden">
        <img src={image} alt={title} />
      </div>
      <div className="p-[12px]">
        <p className="text-[var(--gray)] uppercase font-bold text-[11px]">
          {subText}
        </p>
        <p className="text-[var(--primary)] text-[20px] font-bold font-overlock">
          {title}
        </p>
        <p className="text-[var(--primary)] text-[14px]">{description}</p>
        <article className="flex gap-2 items-center text-[14px] absolute bottom-[12px] right-[12px] justify-center cursor-pointer">
          <p className="text-[var(--primary)] font-bold">Lees meer</p>
          <PiArrowRightDuotone className="text-[var(--secondary)] mt-1" />
        </article>
      </div>
    </div>
  );
};

export default Card;
