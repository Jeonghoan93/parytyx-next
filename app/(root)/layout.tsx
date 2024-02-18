"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col overflow-x-hidden">{children}</div>;
}
