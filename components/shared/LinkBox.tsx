import Link from "next/link";
import LineContainer from "./LineContainer";

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
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <span>{icon}</span>
          <div className="flex flex-col gap-1">
            <span className="p-semibold-14">{title}</span>
            <span className="p-regular-12">{desc}</span>
          </div>
        </div>
      </Link>
    </LineContainer>
  );
};

export default LinkBox;
