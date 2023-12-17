"use client";

import { footerLink } from "@/constants";
import useHandleScroll from "@/src/hooks/useHandleScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileFooter: React.FC = () => {
  const hideNav = useHandleScroll();

  const pathname = usePathname();

  return (
    <div
      style={{ height: "50px" }}
      className={`border-t-[2px] fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500 ${
        hideNav ? "translate-y-full" : ""
      }`}
    >
      <div className="flex justify-around items-center h-full px-4">
        {footerLink.map((link) => {
          const isActive = pathname === link.route;
          const IconComponent = link.icon;

          return (
            <Link key={link.route} href={link.route}>
              <li
                className={`${
                  isActive && "text-primary-500"
                } flex flex-col items-center gap-1 cursor-pointer`}
              >
                <IconComponent size={18} color={isActive ? "black" : "gray"} />

                <span
                  className={`text-[8pt] ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-500 font-light"
                  } `}
                >
                  {link.label}
                </span>
              </li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFooter;
