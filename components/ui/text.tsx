import React from "react";

interface TextProps {
  children: React.ReactNode;
  extraSmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  extraLarge?: boolean;
  bold?: boolean;
  semibold?: boolean;
  lighGray?: boolean;
  darkGray?: boolean;
  leadingTight?: boolean;
  underline?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  extraSmall,
  small,
  medium,
  large,
  extraLarge,
  bold,
  semibold,
  lighGray,
  darkGray,
  leadingTight,
  underline,
}) => {
  let classNames = "";
  if (extraSmall) classNames += " text-[10pt]";
  if (small) classNames += " text-[12pt]";
  if (medium) classNames += " text-[14pt]";
  if (large) classNames += " text-[16pt]";
  if (extraLarge) classNames += " text-[18pt]";
  if (bold) classNames += " font-bold";
  if (semibold) classNames += " font-semibold";
  if (lighGray) classNames += " text-neutral-500";
  if (darkGray) classNames += " text-neutral-700";
  if (leadingTight) classNames += " leading-tight";
  if (underline) classNames += " underline";

  return <span className={classNames}>{children}</span>;
};

export default Text;
