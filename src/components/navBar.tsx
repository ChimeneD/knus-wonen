/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

const NavBar = () => {
  const menu = [
    {
      label: "Ik hurr",
    },
    {
      label: "Ik zoek",
    },
    {
      label: "Over ons",
    },
    {
      label: "Projecten",
    },
  ];

  const icons = [
    {
      src: "svg/search-icon.svg",
      alt: "search icon",
    },
    {
      src: "svg/user-icon.svg",
      alt: "user icon",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-[80px] lg:px-[143px] md:px-6 px-4">
      <img
        src="svg/logo.svg"
        alt="company-logo"
        className="cursor-pointer w-[50%] md:w-auto"
      />
      <ul className="hidden md:flex text-[var(--primary)] font-bold gap-[12px] font-poppins items-center">
        {menu.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer text-[16px] leading-[24px] hover:text-[var(--secondary)] transition-all duration-[var(--duration)]"
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="flex gap-[12px] items-center">
        {icons.map((icon) => (
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
      <div className="z-20 md:hidden absolute top-[80px] left-0 right-0 w-full transition-all duration-[var(--duration)]">
        <ul
          className={`${
            open
              ? "h-[30vh] gap-[12px] text-[var(--primary)] py-[12px] "
              : "h-[0px]"
          } flex flex-col font-bold font-poppins justify-center items-center bg-[var(--background)] transition-all duration-[var(--duration)] overflow-hidden`}
        >
          {menu.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer text-[16px] leading-[24px] hover:text-[var(--secondary)] transition-all duration-[var(--duration)]"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
