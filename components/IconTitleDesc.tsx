import Link from "next/link";
import React from "react";
import FlexCol from "./ui/flex-col";
import FlexRow from "./ui/flex-row";
import Text from "./ui/text";

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
    <FlexCol items="items-start" gap={4}>
      <FlexRow gap={3} items="items-center">
        {icon}

        <Link href={href || "/"}>
          <span className="hover:underline">
            <Text bold medium>
              {title}
            </Text>
          </span>
        </Link>
      </FlexRow>

      <Text extraSmall darkGray>
        {desc}
      </Text>
    </FlexCol>
  );
};

export default IconTextDesc;
