"use client";

import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import Container from "@/components/ui/container";
import FlexCol from "@/components/ui/flex-col";
import FlexRow from "@/components/ui/flex-row";
import LineContainer from "@/components/ui/line-container";
import Text from "@/components/ui/text";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";

const EventDetails = ({ params: { id }, searchParams }: SearchParamProps) => {
  const isMobile = useWindowWidth() < 768;

  const [event, setEvent] = useState<any>(null);
  const [relatedEvents, setRelatedEvents] = useState<
    | {
        data: any;
        totalPages: number;
      }
    | undefined
  >(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEvent = await getEventById(id);
        if (fetchedEvent) {
          setEvent(fetchedEvent);
          const fetchedRelatedEvents = await getRelatedEventsByCategory({
            categoryId: fetchedEvent.category._id,
            eventId: fetchedEvent._id,
            page: searchParams.page as string,
          });

          setRelatedEvents(fetchedRelatedEvents);
        }
      } catch (error) {
        console.error("Failed to fetch event details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, searchParams.page]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!event) {
    return <EmptyState />;
  }

  return (
    <>
      {isMobile ? (
        <section
          className="
          w-full shadow-md mt-3
        "
        >
          <img src={event.imageUrl} className="w-full h-[30vh]" alt="Image" />
        </section>
      ) : null}

      <Container>
        <div
          className="
          max-w-screen-lg 
          mx-auto
        "
        >
          <div className="flex flex-col gap-4">
            {!isMobile ? (
              <section
                className="
          w-full
          h-[50vh]
          overflow-hidden 
          rounded-xl
          relative
        "
              >
                <img
                  src={event.imageUrl}
                  style={{ width: "100%", height: "100%" }}
                  className="object-cover w-full"
                  alt="Image"
                />
              </section>
            ) : null}

            <div
              className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
            >
              <div className="flex flex-col gap-3 col-span-4 mb-3">
                <LineContainer>
                  <FlexCol items="items-start">
                    <FlexRow>
                      <Text semibold extraSmall darkGray>
                        {formatDateTime(event.startDateTime).dateOnly} -{" "}
                        {formatDateTime(event.startDateTime).timeOnly}
                      </Text>
                      -
                      <Text semibold extraSmall darkGray>
                        {formatDateTime(event.endDateTime).dateOnly} -{" "}
                        {formatDateTime(event.endDateTime).timeOnly}
                      </Text>
                    </FlexRow>

                    <Text bold extraLarge>
                      {event.title}
                    </Text>

                    <FlexCol>
                      <Text semibold extraSmall>
                        {event.description}
                      </Text>
                    </FlexCol>
                  </FlexCol>
                </LineContainer>

                <LineContainer>
                  <FlexCol items="items-start">
                    <FlexRow>
                      <MdLocationPin />

                      <Text semibold small>
                        {event.location}
                      </Text>
                    </FlexRow>

                    <div>Implement Map here...</div>
                  </FlexCol>
                </LineContainer>

                <LineContainer>
                  <FlexRow justify="justify-between">
                    <FlexCol items="items-start">
                      <Text small semibold>
                        hosted by host name
                      </Text>

                      <span>number of people joining...?</span>
                    </FlexCol>

                    {/* Navigate to user profile and add user photo */}
                    <Link href={"/"}>
                      <img
                        className="rounded-full"
                        height="40"
                        width="40"
                        alt="Avatar"
                        src={"/assets/images/placeholder.jpg"}
                      />
                    </Link>
                  </FlexRow>
                </LineContainer>
              </div>
              {!isMobile ? (
                <div
                  className="
                md:order-last 
                md:col-span-3
              "
                >
                  booking
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>

      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                    {event.isFree ? "FREE" : `$${event.price}`}
                  </p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {event.category.name}
                  </p>
                </div>

                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-primary-500">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>

            <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  <p>
                    {formatDateTime(event.endDateTime).dateOnly} -{" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
