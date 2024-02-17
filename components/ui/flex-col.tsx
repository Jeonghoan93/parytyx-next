import React from "react";

interface FlexColProps {
  children: React.ReactNode;
  widthFull?: boolean;
  gap?: number;
  items?:
    | "items-center"
    | "items-start"
    | "items-end"
    | "items-baseline"
    | "items-stretch";
  justify?:
    | "justify-center"
    | "justify-start"
    | "justify-end"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
}

const FlexCol: React.FC<FlexColProps> = ({
  children,
  gap = 2,
  items = "",
  justify = "",
  widthFull = false,
}) => {
  const className = `flex flex-col gap-${gap} ${items} ${justify} ${
    widthFull ? "w-full" : ""
  } `;

  return <div className={className}>{children}</div>;
};

export default FlexCol;
