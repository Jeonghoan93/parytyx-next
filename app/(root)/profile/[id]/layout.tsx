"use client";

import Header from "@/components/shared/Header";
import MobileFooterEventDetail from "@/components/shared/MobileFooterEventDetail";
import FlexCol from "@/components/ui/flex-col";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexCol>
      <Header />
      <main className="py-[80px]">{children}</main>
      <MobileFooterEventDetail />
    </FlexCol>
  );
}
