"use client";

import Header from "@/components/shared/Header";
import MobileFooter from "@/components/shared/MobileFooter";
import FlexCol from "@/components/ui/flex-col";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexCol>
      <Header />
      <main className="py-[70px]">{children}</main>
      <MobileFooter />
    </FlexCol>
  );
}
