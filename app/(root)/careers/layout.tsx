"use client";

import Header from "@/components/shared/Header";
import MobileFooterEventDetail from "@/components/shared/MobileFooterEventDetail";
import FlexCol from "@/components/ui/flex-col";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexCol>
      <Header />
      <main className="py-[60px]">{children}</main>
      <MobileFooterEventDetail />
    </FlexCol>
  );
}
