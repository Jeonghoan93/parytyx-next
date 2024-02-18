"use client";

import Header from "@/components/shared/Header";
import MobileFooter from "@/components/shared/MobileFooter";
import FlexCol from "@/components/ui/flex-col";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexCol>
      <Header />
      {children}
      <MobileFooter />
    </FlexCol>
  );
}
