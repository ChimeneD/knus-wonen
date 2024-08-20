/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  PiChatsCircleDuotone,
  PiHandDepositDuotone,
  PiHammerDuotone,
} from "react-icons/pi";

const Hero = () => {
  const items = [
    {
      label: "Reparatie melden",
      icon: (
        <PiHammerDuotone className="h-[16px] md:h-[32px] w-[16px] md:w-[32px]" />
      ),
    },
    {
      label: "Huur betalen",
      icon: (
        <PiHandDepositDuotone className="h-[16px] md:h-[32px] w-[16px] md:w-[32px]" />
      ),
    },
    {
      label: "Contact",
      icon: (
        <PiChatsCircleDuotone className="h-[16px] md:h-[32px] w-[16px] md:w-[32px]" />
      ),
    },
  ];
  return (
    <div className="w-full h-[560px] relative">
      <img src="svg/blob-2.svg" alt="blob-2" className="absolute md:w-auto" />
      <img
        src="svg/blob-1.svg"
        alt="blob-1"
        className="absolute bottom-0 left-[50%] translate-x-[-50%] hidden md:block"
      />
      <img
        src="svg/blob-3.svg"
        alt="blob-3"
        className="absolute right-0 bottom-0 hidden md:block"
      />
      {/* <img
        src="svg/hero.svg"
        alt="hero svg"
        className="w-full h-full object-cover"
      /> */}
      <div className="flex flex-col justify-end h-full items-center px-2">
        <article className="z-10 py-2 overflow-x-auto w-full md:w-auto">
          <p className="text-[var(--primary)] md:text-white text-lg md:text-[24px] leading-[36px] font-poppins ">
            Waarmee kunnen we je helpen?
          </p>
          <div className="flex gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-max md:w-[288px] md:h-[64px] bg-[var(--background)] rounded-lg flex items-center justify-start gap-2 px-2 py-2 md:px-[16px] text-[var(--primary)] font-bold"
              >
                {item.icon}
                <p className="text-xs md:text-[16px]">{item.label}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
