import Link from "next/link";
import FlexCol from "../ui/flex-col";
import FlexRow from "../ui/flex-row";
import LineContainer from "../ui/line-container";
import Text from "../ui/text";

interface LinkBoxProps {
  icon: React.ReactNode;
  title: string;
  desc?: string;
  href: string;
}
const LinkBox: React.FC<LinkBoxProps> = ({ icon, title, desc, href }) => {
  return (
    <LineContainer>
      <Link href={href}>
        <FlexRow gap={4} items="items-center">
          {icon}
          <FlexCol gap={1}>
            <Text semibold small>
              {title}
            </Text>
            <Text extraSmall lightGray>
              {desc}
            </Text>
          </FlexCol>
        </FlexRow>
      </Link>
    </LineContainer>
  );
};

export default LinkBox;
