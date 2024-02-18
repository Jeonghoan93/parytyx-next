"use client";

import FooterBecomeOrganiser from "@/components/root/become-an-organiser/Footer";
import HeaderBecomeOrganiser from "@/components/root/become-an-organiser/HeaderBecomeOrganiser";
import FlexCol from "@/components/ui/flex-col";

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexCol>
      <HeaderBecomeOrganiser />
      <div className="pt-[50px]"></div>
      {children}
      <FooterBecomeOrganiser />
    </FlexCol>
  );
}
