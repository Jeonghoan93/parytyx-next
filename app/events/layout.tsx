"use client";

import Header from "@/components/shared/Header";
import MobileFooterEventDetail from "@/components/shared/MobileFooterEventDetail";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useWindowWidth() < 768;
  return (
    <div className="flex overflow-x-hidden h-screen flex-col">
      <Header />
      <main className="pt-[54pt]">{children}</main>
      {isMobile && <MobileFooterEventDetail />}
    </div>
  );
}
