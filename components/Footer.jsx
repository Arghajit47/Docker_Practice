import Link from "next/link";
import React from "react";
const footerItems = [
  {
    key: "about",
    value: "Tesla © 2022",
  },

  { key: "legal", value: "Privacy & Legal" },
  {
    key: "vin-recall-search",
    value: "Vehicle Recalls",
  },

  {
    key: "contact",
    value: "Contact",
  },
  {
    key: "careers",
    value: "Careers",
  },

  {
    key: "news",
    value: "News",
  },
  {
    key: "engage",
    value: "Engage",
  },

  {
    key: "findus",
    value: "Locations",
  },
];

const Footer = () => {
  return (
    <div
      className="min-h-[40px] sticky bottom-0 flex items-center justify-center bg-gray-300 bg-opacity-20 py-3 border-t border-gray-300"
      id="footer-wrapper"
    >
      <div className="grid lg:flex sm:grid-cols-4 grid-cols-3   lg:gap-x-4  mx-auto ">
        {footerItems &&
          footerItems.map((item, index) => (
            <Link href={`/`} key={index} id={`footer-item-${index}`}>
              <span className=" font-medium py-0.5 px-2 hover:bg-gray-200 text-xs  rounded transition duration-300 ease-in flex-nowrap cursor-pointer col-span-1 text-gray-800 ">
                {item.value}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Footer;
