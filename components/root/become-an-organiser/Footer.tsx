"use client";

import Text from "@/components/ui/text";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";
import React from "react";

const FooterBecomeOrganiser: React.FC = () => {
  const isMobile = useWindowWidth() < 768;

  return (
    <div
      className={`h-[80px] border-t-[6px] border-neutral-300 fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500`}
    >
      <div
        className={`flex items-center h-full px-6 ${
          isMobile ? "justify-center" : "justify-end"
        }`}
      >
        <span
          className={`rounded-lg border-[1px] shadow py-3 px-6 text-center bg-rose-600 bg-opacity-95 ${
            isMobile ? "w-full" : ""
          }`}
        >
          <Text white>Get started</Text>
        </span>
      </div>
    </div>
  );
};

export default FooterBecomeOrganiser;
