/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { link_container, link_items } from "@utils/animations/navbar";
import { nav_icons, nav_menu } from "@utils/constants";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-[80px] lg:px-[143px] md:px-6 px-4">
      <img
        src="svg/logo.svg"
        alt="company-logo"
        className="cursor-pointer w-[50%] md:w-auto"
      />
      <motion.ul
        className="hidden md:flex text-[var(--primary)] font-bold gap-[12px] font-poppins items-center"
        variants={link_container}
        initial="hidden"
        animate="show"
      >
        {nav_menu.map((item) => (
          <motion.li
            key={item.label}
            className="cursor-pointer text-[16px] leading-[24px] hover:text-[var(--secondary)] transition-all duration-[var(--duration)]"
            variants={link_items}
          >
            {item.label}
          </motion.li>
        ))}
      </motion.ul>
      <div className="flex gap-[12px] items-center">
        {nav_icons.map((icon) => (
          <span
            key={icon.alt}
            className="cursor-pointer flex items-center justify-center"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
            />
          </span>
        ))}
        <div className="flex md:hidden items-center">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            color="var(--primary)"
            size={20}
          />
        </div>
      </div>
      <div
        className={`z-20 md:hidden absolute top-[80px] left-0 right-0 w-full transition-all duration-[var(--duration)] ${
          open ? "h-[30vh] gap-[12px]" : "h-[0px]"
        } overflow-hidden`}
      >
        {open && (
          <motion.ul
            className={`flex flex-col gap-2 font-bold font-poppins justify-center items-center bg-[var(--background)] transition-all duration-[var(--duration)] py-[12px]`}
            variants={link_container}
            initial="hidden"
            animate="show"
          >
            {nav_menu.map((item) => (
              <motion.li
                key={item.label}
                className="text-[var(--primary)] cursor-pointer text-[16px] leading-[24px] hover:text-[var(--secondary)] transition-all duration-[var(--duration)]"
                variants={link_items}
              >
                {item.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
