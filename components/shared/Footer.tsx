"use client";

import Link from "next/link";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import Container from "../ui/container";

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem = ({ label, path }: NavigationItemProps) => {
  return (
    <Link href={path}>
      <div className="p-regular-14 font-semibold mb-2 hover:underline">
        {label}
      </div>
    </Link>
  );
};

const FooterSectionTitle = ({ title }: { title: string }) => {
  return <div className="mb-3 p-bold-16">{title}</div>;
};

const Footer = () => {
  const Info: Array<NavigationItemProps> = [
    { label: "About", path: "/about" },
    { label: "Tickets", path: "/tickets" },
    { label: "Resale", path: "/resale" },
    { label: "Advertise", path: "/advertise" },
  ];

  const Hosting: Array<NavigationItemProps> = [
    { label: "Sell tickets online", path: "/profile/create" },
    { label: "Get paid online", path: "/profile/create" },
    { label: "QR codes for check-in", path: "/profile/create" },
  ];

  const PartyX = [
    {
      label: "Ambitions",
      path: "/ambitions",
    },
    {
      label: "Careers",
      path: "/careers",
    },
    {
      label: "Investors",
      path: "/investors",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-10 w-full sm:justify-between sm:gap-0 sm:flex-row py-20">
        <div className="flex flex-col justify-between h-[200px]">
          <div className="flex flex-col gap-2">
            <Link href={"/"}>
              <span className="p-bold-16">
                Party
                <span className="text-red-700">X</span>
              </span>
            </Link>

            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-center">
                <span className="px-1">
                  <FaLocationArrow size={10} />
                </span>

                <span className="p-regular-12">Sweden</span>
              </div>

              <div className="flex flex-row gap-1 items-center">
                <span className="px-1">
                  <BiSolidMessageRounded size={10} />
                </span>

                <span className="p-regular-12">English</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <span className="p-regular-14">Download Our Apps</span>

            <div className="flex flex-row gap-3 items-center">
              <span className="cursor-pointer">
                <img
                  src={"/assets/images/appleAppDownload.svg"}
                  style={{ height: "33px" }}
                  className="object-cover w-full"
                  alt="Image"
                />
              </span>

              <span className="cursor-pointer">
                <img
                  src={"/assets/images/androidAppDownload.svg"}
                  style={{ height: "33px" }}
                  className="object-cover w-full"
                  alt="Image"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 md:mt-0 md:w-3/5">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 p-3">
              <FooterSectionTitle title="Info" />
              {Info.map(({ label, path }, index) => (
                <NavigationItem key={index} label={label} path={path} />
              ))}
            </div>

            <div className="w-full md:w-1/3 p-3">
              <FooterSectionTitle title="Hosting" />
              {Hosting.map(({ label, path }, index) => (
                <NavigationItem key={index} label={label} path={path} />
              ))}
            </div>

            <div className="w-full md:w-1/3 p-3">
              <FooterSectionTitle title="PartyX" />
              {PartyX.map(({ label, path }, index) => (
                <NavigationItem key={index} label={label} path={path} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
