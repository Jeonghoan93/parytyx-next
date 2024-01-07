import IconItemCard from "@/components/profile/IconItemCard";
import PhotoItemCard from "@/components/profile/PhotoItemCard";
import LinkBox from "@/components/shared/LinkBox";
import Container from "@/components/ui/container";
import { auth } from "@clerk/nextjs";
import { AiOutlineAppstoreAdd, AiOutlineCreditCard } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { BsPeople, BsPerson } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { PiBoundingBoxLight } from "react-icons/pi";

const ProfilePage = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <Container>
        <div
          className="
          pb-10
          max-w-screen-xl 
          mx-auto
        "
        >
          <div className="flex flex-col gap-4">
            <div
              className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
            >
              <div className="flex flex-col gap-3 col-span-4 mb-3">
                <PhotoItemCard
                  img={"/assets/images/festival.jpg"}
                  title="Earn cash"
                  subtitle="Sell your tickets to multiple channels thru one platform."
                  buttonText="Get started"
                />

                <IconItemCard
                  icon={<AiOutlineAppstoreAdd size={26} />}
                  title="Let people know you better"
                  subtitle="Complete profile to have experience more possibility."
                  buttonText="Complete profile"
                />

                <IconItemCard
                  icon={<AiOutlineCreditCard size={26} />}
                  title="Payout method"
                  subtitle="Add your payout method to receive your earnings."
                  buttonText="Add"
                />
              </div>

              <div
                className="
                md:order-last 
                md:col-span-3
              "
              >
                <section className="flex flex-col gap-3">
                  <LinkBox
                    icon={<BsPerson size={28} />}
                    title="Switch to guest"
                    href="/profile/me"
                  />
                  <LinkBox
                    icon={<PiBoundingBoxLight size={28} />}
                    title="Listings"
                    desc="Past and upcoming events."
                    href={`/profile/${userId}/host/listings`}
                  />
                  <LinkBox
                    icon={<BsPeople size={28} />}
                    title="Guests"
                    desc="Past and upcoming guests."
                    href="/profile/me"
                  />
                  <LinkBox
                    icon={<CiBoxes size={28} />}
                    title="Manage"
                    desc="Customize your management."
                    href="/profile/me"
                  />
                  <LinkBox
                    icon={<BiMessageSquareDetail size={28} />}
                    title="Messages"
                    href="/profile/me"
                  />
                  <LinkBox
                    icon={<BiBook size={28} />}
                    title="Tax"
                    desc="Tax details and settings."
                    href="/profile/me"
                  />
                  <LinkBox
                    icon={<AiOutlineCreditCard size={28} />}
                    title="Payment & Payout"
                    desc="Manage payment and payout methods."
                    href="/profile/me"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
