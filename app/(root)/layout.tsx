import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MobileFooter from "@/components/shared/MobileFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="pt-[54pt] flex-1">{children}</main>
      <footer className="flex-1   bg-gray-100 ">
        <Footer />
      </footer>
      <MobileFooter />
    </div>
  );
}
