"use client";

import MobileFooterEventDetail from "@/components/root/event/MobileFooterEventDetail";
import HeaderEventDetail from "@/components/shared/HeaderEventDetail";
import FlexCol from "@/components/ui/flex-col";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useWindowWidth() < 768;

  return (
    <FlexCol>
      <HeaderEventDetail />
      {children}

      {isMobile && <MobileFooterEventDetail />}
    </FlexCol>
  );
}
