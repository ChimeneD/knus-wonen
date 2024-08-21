/* eslint-disable @next/next/no-img-element */
import { link_container, link_items } from "@utils/animations/hero";
import { motion } from "framer-motion";
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
    <div className="w-[100vw] h-[480px] md:h-[560px] relative overflow-hidden">
      {/* <div className="w-[100vw] h-[560px] relative bg-[url('/svg/hero.svg')] bg-no-repeat lg:bg-cover overflow-hidden"> */}
      <img
        src="svg/blob-2.svg"
        alt="blob-2"
        className="absolute md:w-auto z-10"
      />
      <img
        src="svg/blob-1.svg"
        alt="blob-1"
        className="absolute bottom-0 left-[50%] translate-x-[-50%] hidden md:block z-10"
      />
      <img
        src="svg/blob-3.svg"
        alt="blob-3"
        className="absolute right-0 bottom-0 hidden md:block md:right-[-80px] z-10"
      />
      <img
        src="svg/hero.svg"
        alt="hero svg"
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="flex flex-col justify-end h-full items-center">
        <article className="z-20 py-2 overflow-x-auto w-full md:w-auto gap-4 flex flex-col px-2 backdrop-blur-lg bg-white/30 md:bg-transparent md:backdrop-blur-none">
          <motion.p
            className="text-[var(--primary)] md:text-white text-lg md:text-[24px] leading-[36px] font-poppins"
            initial={{ opacity: 0, translateY: -1, scale: 0.95 }}
            whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
          >
            Waarmee kunnen we je helpen?
          </motion.p>
          <motion.div
            className="flex gap-2"
            initial="hidden"
            whileInView="show"
            variants={link_container}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="w-max md:w-[220px] lg:w-[288px] md:h-[64px] bg-[var(--background)] rounded-lg flex items-center justify-start gap-2 px-2 py-2 md:px-[16px] text-[var(--primary)] font-bold cursor-pointer hover:bg-[var(--secondary)] hover:text-white transition-all duration-[var(--duration)]"
                variants={link_items}
              >
                {item.icon}
                <p className="text-xs md:text-[16px]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
