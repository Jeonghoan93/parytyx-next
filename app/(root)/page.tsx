import ListPartyButton from "@/components/root/ListPartyButton";
import MainEvents from "@/components/root/MainEvents";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MobileFooter from "@/components/shared/MobileFooter";
import FlexCol from "@/components/ui/flex-col";
import { getUserById } from "@/lib/actions/user.actions";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";

const Home = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  console.log("userId", userId);

  const onClickListParty = async (userId: string) => {
    const user = await getUserById(userId);

    console.log("User", user);
  };

  return (
    <>
      <Header />

      <main className="pt-[54pt]">
        <section className="w-full h-[40vh] overflow-hidden  border-neutral-200 shadow relative">
          <section className="w-full h-[40vh] overflow-hidden relative">
            <img
              src="/assets/images/techno.jpg"
              style={{ width: "100%", height: "100%" }}
              className="object-cover w-full"
              alt="Image"
            />
            <div className={"absolute inset-0 bg-black opacity-40"}></div>{" "}
            {/* This div acts as the overlay */}
          </section>

          <section
            style={{ width: "100%", height: "100%", top: 0, left: 0 }}
            className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
          >
            <FlexCol items="items-center" gap={4}>
              <span className=" text-gray-50 p-bold-20">Art</span>
              <span className="shadow-text p-medium-14">
                Uniting Humanity Through Celebratory Experiences
              </span>

              <ListPartyButton userId={userId} />
            </FlexCol>
          </section>
        </section>

        <MainEvents searchParams={searchParams} />
      </main>

      <Footer />

      <MobileFooter />
    </>
  );
};

export default Home;
