import IconItemCard from "@/components/root/profile/IconItemCard";
import PhotoItemCard from "@/components/root/profile/PhotoItemCard";
import LinkBox from "@/components/shared/LinkBox";
import Container from "@/components/ui/container";
import FlexCol from "@/components/ui/flex-col";
import LineContainer from "@/components/ui/line-container";
import Text from "@/components/ui/text";
import { auth } from "@clerk/nextjs";
import {
  AiOutlineAppstoreAdd,
  AiOutlineCreditCard,
  AiOutlineSafety,
} from "react-icons/ai";
import {
  BiBookContent,
  BiMessageSquareDetail,
  BiVideoPlus,
} from "react-icons/bi";
import { BsPersonVcard } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const ProfilePage = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
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
                title="PartyX VIP"
                subtitle="Get exclusive access to the best parties in town"
                buttonText="Upgrade"
              />

              <IconItemCard
                icon={<AiOutlineAppstoreAdd size={26} />}
                title="Let people know you better"
                subtitle="Complete profile to have experience more possibility."
                buttonText="Complete profile"
              />

              <IconItemCard
                icon={<BiVideoPlus size={26} />}
                title="Come to life with video"
                subtitle="Adding a video to your profile shows your personality in action."
                buttonText="Add a Video Prompt"
              />

              <IconItemCard
                icon={<BsPersonVcard size={26} />}
                title="Be a trusted member"
                subtitle="Be part of the verified member and access for more range of parties."
                buttonText="Verify me"
              />

              <LineContainer>
                <FlexCol gap={3}>
                  <div className="mb-2">
                    <h2 className="text-[13pt] font-bold mb-2">Friends</h2>
                    <div className="flex flex-row justify-between items-center">
                      <div className="cursor-pointer flex flex-row items-center gap-2">
                        {/* host photo */}
                        <div className="p-1">
                          <img
                            className="rounded-full"
                            height="40"
                            width="40"
                            alt="Avatar"
                            src={"/assets/images/placeholder.jpg"}
                          />
                        </div>

                        {/* host name and role */}
                        <div className="flex flex-col">
                          <Text small semibold>
                            Jimmy
                          </Text>

                          <Text extraSmall lighGray>
                            Met at a conference
                          </Text>
                        </div>
                      </div>

                      <div className="cursor-pointer py-1 px-2 border-[1px] rounded-md border-neutral-400">
                        <span className="p-medium-12">Message</span>
                      </div>
                    </div>
                  </div>
                </FlexCol>
              </LineContainer>
            </div>

            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <FlexCol gap={3}>
                <LinkBox
                  icon={<IoTicketOutline size={28} />}
                  title="My tickets"
                  desc="Your tickets and booking"
                  href={`/profile/${userId}/tickets`}
                />
                <LinkBox
                  icon={<MdOutlineSpaceDashboard size={28} />}
                  title="Host Dashboard"
                  desc="Manage your events"
                  href={`/profile/${userId}/host`}
                />
                <LinkBox
                  icon={<BiMessageSquareDetail size={28} />}
                  title="Messages"
                  href="/profile"
                />
                <LinkBox
                  icon={<AiOutlineCreditCard size={28} />}
                  title="Payment & Payout"
                  desc="Manage payment and payout methods."
                  href="/profile"
                />
                <LinkBox
                  icon={<AiOutlineSafety size={28} />}
                  title="Your Safety"
                  desc="Trusted organizations to help keep you safe and well"
                  href="/profile"
                />

                <LinkBox
                  icon={<GrSecure size={28} />}
                  title="Login & Security"
                  desc="Change password, set up 2FA and more."
                  href="/profile"
                />

                <LinkBox
                  icon={<BiBookContent size={28} />}
                  title="What works"
                  desc="Learn more about what works and what doesn't."
                  href="/profile"
                />
              </FlexCol>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
