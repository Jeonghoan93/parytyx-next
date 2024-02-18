"use client";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col overflow-x-hidden">{children}</div>;
};

export default RootLayout;
