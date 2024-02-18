"use client";

import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import EventsCollection from "@/components/shared/EventsCollection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MobileFooter from "@/components/shared/MobileFooter";
import FlexCol from "@/components/ui/flex-col";
import FlexRow from "@/components/ui/flex-row";
import Text from "@/components/ui/text";
import { getAllEvents } from "@/lib/actions/event.actions";
import useCurrentLocation from "@/src/hooks/useCurrentLocation";
import { SearchParamProps } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const [events, setEvents] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  const [hasUserAgreed, setHasUserAgreed] = useState(false);
  const [isLocationReady, setIsLocationReady] = useState(false);
  const currentLocation = useCurrentLocation(hasUserAgreed);

  const onClickAgreeCurrentLocation = () => {
    setHasUserAgreed(true);
  };

  const onClickSearchByCity = () => {
    console.log("Search by city");
  };

  useEffect(() => {
    if (currentLocation.city) {
      setIsLocationReady(true);
    }
  }, [currentLocation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEvents = await getAllEvents({
          query: searchText,
          category,
          page,
          limit: 6,
        });

        if (fetchedEvents) {
          setEvents(fetchedEvents);
        }
      } catch (error) {
        console.error("Failed to fetch events: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams.page]);

  // const isMobile = useWindowWidth() < 768;

  const onClickListParty = () => {
    return "/events/create";
  };

  if (isLoading) {
    return <LoadingState />;
  }

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

              <Link href={`${onClickListParty()}`}>
                <span className="cursor-pointer border-[1pt] bg-white text-gray-800 rounded-xl py-2 px-4 border-gray-50 shadow p-medium-14 sm:p-semibold-14">
                  List your party
                </span>
              </Link>
            </FlexCol>
          </section>
        </section>

        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
          <div className="wrapper grid gap-4 md:gap-8">
            {isLocationReady ? (
              <FlexCol gap={1}>
                <FlexRow>
                  <Text medium bold>
                    Browsing events in
                  </Text>

                  <div className="cursor-pointer" onClick={onClickSearchByCity}>
                    <Text medium bold darkGray underline>
                      {currentLocation.city}
                    </Text>
                  </div>
                </FlexRow>

                <div className="cursor-pointer" onClick={onClickSearchByCity}>
                  <Text extraSmall lighGray semibold underline>
                    Or choose another city
                  </Text>
                </div>
              </FlexCol>
            ) : (
              <div
                className="cursor-pointer"
                onClick={onClickAgreeCurrentLocation}
              >
                <Text small bold darkGray underline>
                  Click to show events near you
                </Text>
              </div>
            )}

            <FlexCol gap={5}>
              {!isLocationReady && (
                <FlexCol gap={1}>
                  <Text bold large>
                    Popular events
                  </Text>
                  <div className="cursor-pointer" onClick={onClickSearchByCity}>
                    <Text extraSmall lighGray semibold underline>
                      Or choose any city
                    </Text>
                  </div>
                </FlexCol>
              )}

              {[1, 7].length > 0 ? (
                <FlexRow gap={4}>
                  {["House party", "Rave", "Festival"].map((_event, index) => {
                    return (
                      <div
                        key={index}
                        className="cursor-pointer border-[1px] border-b-neutral-200 rounded-xl bg-slate-200 px-3"
                      >
                        <Text whiteSpace="nowrap" darkGray extraSmall>
                          {_event}
                        </Text>
                      </div>
                    );
                  })}
                </FlexRow>
              ) : (
                <EmptyState />
              )}

              {events?.data?.length ? (
                <EventsCollection
                  data={events?.data}
                  emptyTitle="No Events Found"
                  emptyStateSubtext="Come back later"
                  collectionType="All_Events"
                  limit={6}
                  page={page}
                  totalPages={events?.totalPages}
                />
              ) : (
                <EmptyState />
              )}
            </FlexCol>
          </div>
        </section>

        <section className="wrapper my-8 flex flex-col gap-7">
          <span className="p-semibold-20">Upcoming events</span>

          {events?.data?.length ? (
            <EventsCollection
              data={events?.data}
              emptyTitle="No Events Found"
              emptyStateSubtext="Come back later"
              collectionType="All_Events"
              limit={6}
              page={page}
              totalPages={events?.totalPages}
            />
          ) : (
            <EmptyState />
          )}
        </section>
      </main>

      <Footer />

      <MobileFooter />
    </>
  );
};

export default Home;
