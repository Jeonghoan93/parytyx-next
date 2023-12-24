import IconTextDesc from "@/components/IconTitleDesc";
import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegGrinHearts, FaSpotify } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { MdSecurityUpdateGood, MdTravelExplore } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Celebrate</h1>
            <p className="p-regular-20 md:p-regular-24">
              Discover the world's best parties with the ultimate connections to
              DJs, clubs, festivals and events.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <IconTextDesc
              icon={<TbWorld size={26} />}
              title={"The global guide of local scenes"}
              desc={
                "Discover the best events, clubs, festivals and DJs near you in over 155 countries."
              }
            />

            <IconTextDesc
              icon={<IoTicketOutline size={26} />}
              title={"Secure the tickets"}
              desc={
                "Pay with Apple Pay, Google Pay, PayPal, Amex and credit cards in your local currency."
              }
            />

            <IconTextDesc
              icon={<MdTravelExplore size={26} />}
              title={"Deep discovery"}
              desc={
                "Filter events by type, size, genre, date, popularity, PartyX Picks and For You."
              }
            />

            <IconTextDesc
              icon={<FaSpotify size={26} />}
              title={"Import your music taste"}
              desc={
                "Sync with Spotify to power up your personalised event discovery."
              }
            />
          </div>

          <div className="flex flex-col gap-10">
            <IconTextDesc
              icon={<FaRegGrinHearts size={26} />}
              title={"Artist Notifications"}
              desc={"Never miss your favourite DJ playing in your local city."}
            />

            <IconTextDesc
              icon={<MdSecurityUpdateGood size={26} />}
              title={"Get in stress-free"}
              desc={
                "Display your tickets in-app and never miss last entry with Maps and Uber integrations."
              }
            />

            <IconTextDesc
              icon={<RiSecurePaymentLine size={26} />}
              title={"Buy with confidence"}
              desc={
                "Benefit from industry-leading anti-tout technology and our fully-featured resale system."
              }
            />

            <IconTextDesc
              icon={<IoIosNotificationsOutline size={26} />}
              title={"Ticket notifications"}
              desc={
                "Get notified as soon as a ticket to a sold out event becomes available (coming soon)."
              }
            />
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
