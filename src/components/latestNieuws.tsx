import React from "react";
import Card from "./card";
import { PiArrowRightDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { card_container, card_items } from "@utils/animations/latestNieuws";

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
      <div className="flex flex-col gap-4 w-full lg:w-max lg:max-w-[70vw]">
        <motion.p
          className="text-[var(--primary)] text-[32px] leading-[39.04px] font-overlock font-medium"
          initial={{ opacity: 0, translateY: -1, scale: 0.95 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
        >
          Laatste nieuws
        </motion.p>
        <motion.div
          className="flex gap-6 items-center w-full overflow-x-auto py-4"
          initial="hidden"
          whileInView="show"
          variants={card_container}
        >
          {items.map((item, index) => (
            <motion.div
              variants={card_items}
              key={index}
              className="h-max w-max"
            >
              <Card {...item} />
            </motion.div>
          ))}
        </motion.div>
        <motion.article
          className="flex gap-2 items-center text-[14px] bottom-[12px] justify-end cursor-pointer"
          initial={{ opacity: 0, translateY: -1, scale: 0.95 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
        >
          <p className="text-[var(--primary)] font-bold">
            Bekijk alle nieuwsberichten
          </p>
          <PiArrowRightDuotone className="text-[var(--secondary)] mt-1" />
        </motion.article>
      </div>
    </div>
  );
};

export default LatestNieuws;
