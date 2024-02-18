"use client";

import HeaderEventDetail from "@/components/shared/HeaderEventDetail";
import MobileFooter from "@/components/shared/MobileFooter";
import FlexCol from "@/components/ui/flex-col";

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexCol>
      <HeaderEventDetail />
      <div className="pt-[50px]"></div>
      {children}
      <MobileFooter />
    </FlexCol>
  );
}
