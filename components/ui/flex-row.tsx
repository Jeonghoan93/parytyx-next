import React from "react";

interface FlexRowProps {
  children: React.ReactNode;
  gap?: number;
  widthFull?: boolean;
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

const FlexRow: React.FC<FlexRowProps> = ({
  children,
  gap = 2,
  items = "",
  justify = "",
  widthFull = false,
}) => {
  const className = `flex flex-row gap-${gap} ${items} ${justify} ${
    widthFull ? "w-full" : ""
  }`;

  return <div className={className}>{children}</div>;
};

export default FlexRow;
