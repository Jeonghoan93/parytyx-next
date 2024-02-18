"use client";

import Footer from "@/components/shared/Footer";
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

      {children}

      <Footer />

      <MobileFooter />
    </FlexCol>
  );
}
