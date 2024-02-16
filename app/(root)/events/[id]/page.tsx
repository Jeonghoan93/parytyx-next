"use client";

import EmptyState from "@/components/EmptyState";
import LoadingState from "@/components/LoadingState";
import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import Button from "@/components/ui/button-v2";
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
  const [guestCount, setGuestCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(
    event ? event.price * guestCount : 0
  );

  useEffect(() => {
    setTotalPrice(event ? event.price * guestCount : 0);
  }, [guestCount, event ? event.price : 0]);

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
          className={`
          max-w-screen-lg 
          mx-auto
          ${!isMobile ? "mt-7" : ""}
        `}
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

                    <Text semibold small>
                      {event.category.name}
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
                    <FlexRow items="items-center">
                      <MdLocationPin />

                      <Text semibold small>
                        {event.location}
                      </Text>
                    </FlexRow>

                    <div>Implement Map here...</div>
                  </FlexCol>
                </LineContainer>

                <LineContainer>
                  <FlexRow justify="justify-between" items="items-center">
                    <FlexCol items="items-start">
                      <Text small semibold>
                        hosted by {event.organizer.firstName}{" "}
                        {event.organizer.lastName}
                      </Text>

                      <Text extraSmall small lighGray>
                        {event.url}
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
                  <LineContainer>
                    <FlexCol items="items-start" gap={5}>
                      <FlexRow items="items-center">
                        <Text bold medium darkGray>
                          From
                        </Text>
                        <Text medium>SEK {event.price}</Text>
                      </FlexRow>

                      <FlexRow justify="justify-between" widthFull>
                        <label
                          htmlFor="guestCount"
                          className="font-medium text-neutral-600"
                        >
                          Guests:
                        </label>

                        <select
                          id="guestCount"
                          value={guestCount}
                          onChange={(e) =>
                            setGuestCount(Number(e.target.value))
                          }
                          className="bg-neutral-100 border rounded-md p-1"
                        >
                          {[...Array(7)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </FlexRow>

                      <hr />

                      <FlexRow justify="justify-between">
                        <Text bold medium darkGray>
                          Total
                        </Text>
                        <Text medium>SEK {totalPrice}</Text>
                      </FlexRow>

                      <FlexCol widthFull={true}>
                        <CheckoutButton event={event} />

                        <Button
                          disabled={isLoading}
                          label="Find ticket"
                          href="/"
                        />

                        <div className="cursor-pointer px-1 py-2 relative text-center">
                          <span className="text-[11pt] underline text-neutral-800 font-semibold">
                            Share the event with friends
                          </span>
                        </div>
                      </FlexCol>
                    </FlexCol>
                  </LineContainer>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>

      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <Text extraLarge bold>
          Related Events
        </Text>

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
