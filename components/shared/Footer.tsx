"use client";

import Link from "next/link";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import FlexCol from "../ui/flex-col";
import FlexRow from "../ui/flex-row";
import Text from "../ui/text";

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
    { label: "Sell tickets online", path: "/events/create" },
    { label: "Get paid online", path: "/events/create" },
    { label: "QR codes for check-in", path: "/events/create" },
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
    <footer className="wrapper my-10 flex flex-col gap-10">
      <FlexCol>
        <Link href={"/"}>
          <Text leading medium semibold>
            Party
            <span className="text-red-700">X</span>
          </Text>
        </Link>

        <div className="flex flex-col gap-1">
          <FlexRow items="items-center">
            <span className="px-1">
              <FaLocationArrow size={10} />
            </span>

            <Text extraSmall>Sweden</Text>
          </FlexRow>

          <FlexRow items="items-center">
            <span className="px-1">
              <BiSolidMessageRounded size={10} />
            </span>

            <Text extraSmall>English</Text>
          </FlexRow>
        </div>
      </FlexCol>

      <FlexCol gap={3}>
        <Text small semibold>
          Download apps
        </Text>

        <FlexRow gap={3}>
          <span className="cursor-pointer">
            <img
              src={"/assets/images/appleAppDownload.svg"}
              style={{ height: "36px" }}
              className="object-cover w-full"
              alt="Image"
            />
          </span>

          <span className="cursor-pointer">
            <img
              src={"/assets/images/androidAppDownload.svg"}
              style={{ height: "36px" }}
              className="object-cover w-full"
              alt="Image"
            />
          </span>
        </FlexRow>
      </FlexCol>

      <FlexCol gap={1}>
        <FooterSectionTitle title="Info" />
        {Info.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </FlexCol>

      <FlexCol gap={1}>
        <FooterSectionTitle title="Hosting" />
        {Hosting.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </FlexCol>

      <FlexCol gap={1}>
        <FooterSectionTitle title="PartyX" />
        {PartyX.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </FlexCol>
    </footer>
  );
};

export default Footer;
