import MainEvents from "@/components/root/MainEvents";
import MainPhoto from "@/components/root/MainPhoto";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MobileFooter from "@/components/shared/MobileFooter";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";

const Home = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <Header />

      <MainPhoto userId={userId} />

      <MainEvents searchParams={searchParams} />

      <Footer />

      <MobileFooter />
    </>
  );
};

export default Home;
