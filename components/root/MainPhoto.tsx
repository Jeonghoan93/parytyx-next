"use client";

import { useWindowWidth } from "@/src/hooks/useWindowWidth";
import FlexCol from "../ui/flex-col";
import ListPartyButton from "./ListPartyButton";

const MainPhoto = ({ userId }: { userId: string }) => {
  const isMobile = useWindowWidth() < 768;

  return (
    <section
      className={`w-full overflow-hidden  border-neutral-200 shadow relative ${
        isMobile ? "h-[30vh]" : "h-[40vh]"
      }`}
    >
      <section className="w-full h-[40vh] overflow-hidden relative">
        <img
          src="/assets/images/techno.jpg"
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
        <div className={"absolute inset-0 bg-black opacity-40"}></div>{" "}
        {/* This div acts as the overlay */}
      </section>

      <section
        style={{ width: "100%", height: "100%", top: 17, left: 0 }}
        className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
      >
        <FlexCol items="items-center" gap={6}>
          <span className="shadow-text p-medium-14 text-white">
            Uniting Humanity Through Celebratory Experiences
          </span>

          <ListPartyButton userId={userId} />
        </FlexCol>
      </section>
    </section>
  );
};

export default MainPhoto;
