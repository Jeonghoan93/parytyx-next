import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import { Button } from "../ui/button";
import FlexRow from "../ui/flex-row";
import Text from "../ui/text";
import MobileNav from "./MobileNav";

const HeaderRelative = () => {
  return (
    <header className="w-full border-b bg-white shadow">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <div
            className="cursor-pointer items-center"
            onClick={() => window.history.back()}
          >
            <FlexRow gap={1} items="items-center">
              <BiChevronLeft size={20} />

              <Text bold small>
                Back
              </Text>
            </FlexRow>
          </div>
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default HeaderRelative;
