import Link from "next/link";
import React from "react";

interface IconTextDescProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href?: string;
}

const IconTextDesc: React.FC<IconTextDescProps> = ({
  icon,
  title,
  desc,
  href,
}) => {
  return (
    <div className="flex flex-row items-start gap-5">
      <span>{icon}</span>

      <div className="flex flex-col gap-3">
        <Link href={href || "/"}>
          <span className="p-bold-16 hover:underline">{title}</span>
        </Link>
        <span className="p-regular-14">{desc}</span>
      </div>
    </div>
  );
};

export default IconTextDesc;
