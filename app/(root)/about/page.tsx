"use client";

import IconTextDesc from "@/components/IconTitleDesc";
import LoadingState from "@/components/LoadingState";
import FlexCol from "@/components/ui/flex-col";
import Link from "next/link";
import { useState } from "react";
import { FaRegGrinHearts, FaSpotify } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { MdSecurityUpdateGood, MdTravelExplore } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const About = () => {
  // For now no data but we can add some later
  const [isLoading, _setLoading] = useState(false);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <section className="w-full h-[40vh] overflow-hidden  border-neutral-200 shadow relative">
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
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
        >
          <FlexCol items="items-center" gap={4}>
            <span className=" text-gray-50 p-bold-20">Art</span>
            <span className="shadow-text p-medium-14">
              Uniting Humanity Through Celebratory Experiences
            </span>

            <Link href="/events/create">
              <span className="cursor-pointer border-[1pt] bg-white text-gray-800 rounded-xl py-2 px-4 border-gray-50 shadow p-medium-14 sm:p-semibold-14">
                List your party
              </span>
            </Link>
          </FlexCol>
        </section>
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2">
          <FlexCol gap={10}>
            <IconTextDesc
              icon={<TbWorld size={26} />}
              title={"The global guide of local scenes"}
              desc={
                "Discover the best events, clubs, festivals and DJs near you in over 155 countries."
              }
            />

            <IconTextDesc
              icon={<IoTicketOutline size={26} />}
              title={"Secure the tickets"}
              desc={
                "Pay with Apple Pay, Google Pay, PayPal, Amex and credit cards in your local currency."
              }
            />

            <IconTextDesc
              icon={<MdTravelExplore size={26} />}
              title={"Deep discovery"}
              desc={
                "Filter events by type, size, genre, date, popularity, PartyX Picks and For You."
              }
            />

            <IconTextDesc
              icon={<FaSpotify size={26} />}
              title={"Import your music taste"}
              desc={
                "Sync with Spotify to power up your personalised event discovery (coming soon)."
              }
            />
          </FlexCol>

          <FlexCol gap={10}>
            <IconTextDesc
              icon={<FaRegGrinHearts size={26} />}
              title={"Artist Notifications"}
              desc={"Never miss your favourite DJ playing in your local city."}
            />

            <IconTextDesc
              icon={<MdSecurityUpdateGood size={26} />}
              title={"Get in stress-free"}
              desc={
                "Display your tickets in-app and never miss last entry with Maps and Uber integrations."
              }
            />

            <IconTextDesc
              icon={<RiSecurePaymentLine size={26} />}
              title={"Buy with confidence"}
              desc={
                "Benefit from industry-leading anti-tout technology and our fully-featured resale system."
              }
            />

            <IconTextDesc
              icon={<IoIosNotificationsOutline size={26} />}
              title={"Ticket notifications"}
              desc={
                "Get notified as soon as a ticket to a sold out event becomes available (coming soon)."
              }
            />
          </FlexCol>
        </div>
      </section>
    </>
  );
};

export default About;
