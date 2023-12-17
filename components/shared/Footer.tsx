"use client";

import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

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
    { label: "Pricing", path: "/events/create" },
    { label: "Cancellations", path: "/help" },
  ];

  const Hosting: Array<NavigationItemProps> = [
    { label: "Sell tickets online", path: "/events/create" },
    { label: "Get paid online", path: "/events/create" },
    { label: "QR codes for check-in", path: "/events/create" },
  ];

  const Company = [
    {
      label: "Career",
      path: "/careers",
    },
    {
      label: "Investors",
      path: "/investors",
    },
  ];

  return (
    <footer
      className="
        bg-gray-100 
        text-gray-900 
        max-w-[2520px]
        xl:px-20 
        md:px-10
        sm:px-2
        px-5
        py-10
        "
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/5 px-2 mb-3 md:mb-0">
          <div className="w-full md:w-90 flex flex-col gap-2">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Link href={"/"}>
                  <span className="cursor-pointer text-[16pt] font-extrabold">
                    PARTY<span className="text-red-700">X</span>
                  </span>
                </Link>
                <span className="mb-4 p-semibold-14">Europe</span>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <span className="p-regular-14">Let's Connect</span>

                <div className="flex flex-row gap-3 items-center">
                  <span className="cursor-pointer">
                    <FaFacebookSquare size={26} />
                  </span>

                  <span className="cursor-pointer">
                    <FaInstagramSquare size={26} />
                  </span>

                  <span className="cursor-pointer">
                    <FaTiktok size={26} />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <span className="p-regular-14">Download Our Apps</span>

                <div className="flex flex-row gap-3 items-center">
                  <span className="cursor-pointer">
                    <img
                      src={"/assets/images/appleAppDownload.svg"}
                      style={{ height: "30px" }}
                      className="object-cover w-full"
                      alt="Image"
                    />
                  </span>

                  <span className="cursor-pointer">
                    <img
                      src={"/assets/images/androidAppDownload.svg"}
                      style={{ height: "30px" }}
                      className="object-cover w-full"
                      alt="Image"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 md:mt-0 md:w-3/5 px-2">
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
              <FooterSectionTitle title="Company" />
              {Company.map(({ label, path }, index) => (
                <NavigationItem key={index} label={label} path={path} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
