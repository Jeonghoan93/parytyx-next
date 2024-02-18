"use client";

import HeaderEventDetail from "@/components/shared/HeaderEventDetail";
import MobileFooterEventDetail from "@/components/shared/MobileFooterEventDetail";
import FlexCol from "@/components/ui/flex-col";

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexCol>
      <HeaderEventDetail />
      {children}
      <MobileFooterEventDetail />
    </FlexCol>
  );
}
