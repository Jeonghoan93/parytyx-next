import Collection from "@/components/shared/Collection";
import LineContainer from "@/components/shared/LineContainer";
import LinkBox from "@/components/shared/LinkBox";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
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

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

  return (
    <>
      <div
        className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        pt-5
      "
      >
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
                <section className="w-full h-[40vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
                  <section className="w-full h-[40vh] overflow-hidden relative">
                    <img
                      src={"assets/images/upgrade.jpeg"}
                      style={{ width: "100%", height: "100%" }}
                      className="object-cover w-full"
                      alt="Image"
                    />
                    <div
                      className={"absolute inset-0 bg-black opacity-50"}
                    ></div>{" "}
                    {/* This div acts as the overlay */}
                  </section>

                  <section
                    style={{ width: "100%", height: "100%", top: 0, left: 0 }}
                    className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
                  >
                    <div className="text-white flex flex-col items-center text-center gap-2">
                      <span className="text-[15pt] text-gray-50 font-extrabold">
                        PartyX VIP
                      </span>
                      <span className="text-[10pt] font-bold px-3 text-gray-100">
                        Get exclusive access to the best parties in town
                      </span>
                      <span className="cursor-pointer w-[100px] shadow-md rounded-xl py-1 bg-white text-black text-[10pt] font-semibold">
                        Upgrade
                      </span>
                    </div>
                  </section>
                </section>

                <LineContainer>
                  <section className="flex flex-col items-center gap-3">
                    <span className="bg-gray-200 rounded-[100%] p-2">
                      <AiOutlineAppstoreAdd size={26} />
                    </span>

                    <div className="flex flex-col gap-1 text-center">
                      <span className="p-semibold-14">
                        Let people know you better
                      </span>

                      <span
                        style={{ maxWidth: "260px" }}
                        className="p-regular-12"
                      >
                        Complete profile to have experience more possibility.
                      </span>
                    </div>

                    <span className="cursor-pointer border-[1pt] text-[10pt] font-semibold text-gray-800 rounded-xl py-2 px-4 border-gray-800">
                      Complete profile
                    </span>
                  </section>
                </LineContainer>

                <LineContainer>
                  <section className="flex flex-col items-center gap-3">
                    <span className="bg-gray-200 rounded-[100%] p-2">
                      <BiVideoPlus size={26} />
                    </span>

                    <div className="flex flex-col gap-1 text-center">
                      <span className="p-semibold-14">
                        Come to life with video
                      </span>

                      <span
                        style={{ maxWidth: "260px" }}
                        className="p-regular-12"
                      >
                        Adding a video to your profile shows your personality in
                        action.
                      </span>
                    </div>

                    <span className="cursor-pointer border-[1pt] text-[10pt] font-semibold text-gray-800 rounded-xl py-2 px-4 border-gray-800">
                      Add a Video Prompt
                    </span>
                  </section>
                </LineContainer>

                <LineContainer>
                  <section className="flex flex-col items-center gap-3">
                    <span className="bg-gray-200 rounded-[100%] p-2">
                      <BsPersonVcard size={26} />
                    </span>

                    <div className="flex flex-col gap-1 text-center">
                      <span className="p-semibold-14">Be a trusted member</span>

                      <span
                        style={{ maxWidth: "260px" }}
                        className="p-regular-12"
                      >
                        Be part of the verified member and access for more range
                        of parties.
                      </span>
                    </div>

                    <span className="cursor-pointer border-[1pt] text-[10pt] font-semibold text-gray-800 rounded-xl py-2 px-4 border-gray-800">
                      Verify me
                    </span>
                  </section>
                </LineContainer>

                <LineContainer>
                  <section className="flex flex-col gap-3">
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
                            <span className="text-[11pt] text-gray-900 font-semibold">
                              Jimmy
                            </span>
                            <span className="text-[9pt] text-gray-500">
                              Met at a conference
                            </span>
                          </div>
                        </div>

                        <div className="cursor-pointer py-1 px-2 border-[1px] rounded-md border-neutral-400">
                          <span className="text-[10pt] font-semibold">
                            Message
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                </LineContainer>
              </div>

              <div
                className="
                md:order-last 
                md:col-span-3
              "
              >
                <section className="flex flex-col gap-3">
                  <LinkBox
                    icon={<IoTicketOutline size={28} />}
                    title="My tickets"
                    desc="Your tickets and booking"
                    href="/tickets"
                  />
                  <LinkBox
                    icon={<MdOutlineSpaceDashboard size={28} />}
                    title="Host Dashboard"
                    desc="Manage your events"
                    href="/profile"
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
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
