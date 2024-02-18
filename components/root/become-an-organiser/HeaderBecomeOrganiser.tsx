import Text from "@/components/ui/text";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";
import Link from "next/link";

const HeaderBecomeOrganiser = () => {
  const isMobile = useWindowWidth() < 768;

  return (
    <header className="fixed w-full z-10 bg-white bg-dotted-pattern bg-contain">
      <div className="wrapper flex items-center justify-between">
        {!isMobile && (
          <Link href="/">
            <span className={"cursor-pointer font-extrabold text-[14pt]"}>
              PARTYX
            </span>
          </Link>
        )}

        <div className={`flex ${isMobile ? "justify-start" : "justify-end"}`}>
          <span
            onClick={() => window.history.back()}
            className="cursor-pointer border-[1px] px-4 py-1 rounded-2xl shadow-sm"
          >
            <Text small darkGray>
              Exit
            </Text>
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderBecomeOrganiser;
