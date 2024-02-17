import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="fixed w-full border-b bg-white shadow z-10">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <span className={"cursor-pointer font-extrabold text-[14pt]"}>
            PARTYX
          </span>
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
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

export default Header;
