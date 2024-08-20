import React from "react";
import { PiFacebookLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";

const Footer = () => {
  const menu = [
    {
      heading: "Bel of mail ons",
      lists: [
        {
          label: "012 - 345 67 89",
        },
        {
          label: "klantenservice@knuswonen.nu",
        },
      ],
    },
    {
      heading: "Openingstijden",
      lists: [
        {
          label: "Maandag t/m donderdag van 8:30 tot 16:30 uur.",
        },
        {
          label: "Vrijdag van 8:30 tot 12:00 uur.",
        },
      ],
    },
    {
      heading: "Kom langs op afspraak",
      lists: [
        {
          label: "Straatweglaan 123",
        },
        {
          label: "1234 AB Dorpstad",
        },
      ],
    },
  ];
  return (
    <footer>
      <section className="bg-[var(--gray-alt)] flex flex-col lg:flex-row justify-between items-center lg:items-start px-[80px] lg:px-[100px] 2xl:px-[144px] py-[64px] lg:h-[236px]">
        {menu.map((item) => (
          <div
            key={item.heading}
            className="flex flex-col items-center lg:items-start justify-start gap-2 max-w-[288px]"
          >
            <h1 className="font-bold font-overlock text-[20px]">
              {item.heading}
            </h1>
            <ul className="font-poppins text-[16px] flex flex-col gap-2 lg:gap-0 items-center text-center lg:text-start lg:items-start my-4 lg:my-0">
              {item.lists.map((list) => (
                <li key={list.label}>{list.label}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start gap-2">
          <h1 className="font-bold font-overlock text-[20px] text-center lg:text-start">
            Volg ons op onze sociale kanalen
          </h1>
          <ul className="flex gap-2 items-center lg:items-start">
            <li>
              <PiFacebookLogoDuotone className="text-[var(--secondary)] h-[32px] w-[32px]" />
            </li>
            <li>
              <PiLinkedinLogoDuotone className="text-[var(--secondary)] h-[32px] w-[32px]" />
            </li>
          </ul>
        </div>
      </section>
      <section className="flex justify-between items-center px-[144px] h-[48px] bg-[var(--background)] text-[12px]">
        <div className="flex items-center gap-[24px] font-poppins underline">
          <a className="cursor-pointer">Privacy</a>
          <a className="cursor-pointer">Cookieverklaring</a>
          <a className="cursor-pointer">Disclaimer</a>
        </div>
        <p>© KnusWonen 2024</p>
      </section>
    </footer>
  );
};

export default Footer;
