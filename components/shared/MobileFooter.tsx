"use client";

import useHandleScroll from "@/src/hooks/useHandleScroll";
import { useState } from "react";
import { BiSearch, BiSolidHome } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

type ActiveButton = "home" | "search" | "account" | null;

const MobileFooter: React.FC = () => {
  const hideNav = useHandleScroll();

  const [activeButton, setActiveButton] = useState<ActiveButton>(null);

  return (
    <div
      style={{ height: "50px" }}
      className={`border-t-[2px] fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500 ${
        hideNav ? "translate-y-full" : ""
      }`}
    >
      <div className="flex justify-around items-center h-full px-4">
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("home");
          }}
        >
          <span>
            <BiSolidHome
              size={18}
              color={activeButton === "search" ? "black" : "gray"}
            />
          </span>

          <span
            className={`text-[8pt] font-semibold ${
              activeButton === "home" ? "text-black" : "text-gray-600"
            }`}
          >
            Home
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("search");
          }}
        >
          <span>
            <BiSearch
              size={18}
              color={activeButton === "search" ? "black" : "gray"}
            />
          </span>
          <span
            className={`text-[8pt] font-semibold ${
              activeButton === "search" ? "text-black" : "text-gray-600"
            }`}
          >
            Search
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setActiveButton("account");
          }}
        >
          <span>
            <BsPersonFill
              size={18}
              color={activeButton === "account" ? "black" : "gray"}
            />
          </span>
          <span
            className={`text-[8pt] font-semibold ${
              activeButton === "account" ? "text-black" : "text-gray-600"
            }`}
          >
            Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
