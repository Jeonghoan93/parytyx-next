import React from "react";
import LineContainer from "../../ui/line-container";

interface IconItemCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
}

const IconItemCard: React.FC<IconItemCardProps> = ({
  icon,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <LineContainer>
      <section className="flex flex-col items-center gap-3">
        <span className="bg-gray-200 rounded-[100%] p-2">{icon}</span>

        <div className="flex flex-col gap-1 text-center">
          <span className="p-semibold-14">{title}</span>

          <span style={{ maxWidth: "260px" }} className="p-regular-12">
            {subtitle}
          </span>
        </div>

        <span className="cursor-pointer border-[1pt] p-medium-12 text-gray-800 rounded-xl py-2 px-4 border-gray-800">
          {buttonText}
        </span>
      </section>
    </LineContainer>
  );
};

export default IconItemCard;
