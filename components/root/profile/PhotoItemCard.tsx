import React from "react";

interface PhotoItemCardProps {
  img: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const PhotoItemCard: React.FC<PhotoItemCardProps> = ({
  img,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <section className="w-full h-[40vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
      <section className="w-full h-[40vh] overflow-hidden relative">
        <img
          src={img}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
        <div className={"absolute inset-0 bg-black opacity-50"}></div>{" "}
        {/* This div acts as the overlay */}
      </section>

      <section
        style={{ width: "100%", height: "100%", top: 0, left: 0 }}
        className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
      >
        <div className="text-white flex flex-col items-center text-center gap-2">
          <span className="text-[15pt] text-gray-50 font-extrabold">
            {title}
          </span>
          <span className="p-regular-12 text-gray-100">{subtitle}</span>
          <span className="cursor-pointer w-[100px] shadow-md rounded-xl py-1 bg-white p-medium-12 text-black">
            {buttonText}
          </span>
        </div>
      </section>
    </section>
  );
};

export default PhotoItemCard;
