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
import { CiTimer } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
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
  const [showMap, setShowMap] = useState(false);
  const [hasEventsWithSameOrganiser, _setHasEventsWithSameOrganiser] =
    useState(false);

  const onClickShowMap = () => () => {
    setShowMap(!showMap);
  };

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

          // TODO: check if the organizer has more events
          // const hasMoreEvents = await checkIfOrganizerHasMoreEvents(
          //   fetchedEvent.organizer._id
          // );

          // setHasEventsWithSameOrganiser(hasMoreEvents.length > 1);
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
      <Container>
        <FlexCol gap={2}>
          <section
            className={`w-full
            overflow-hidden 
            rounded-xl
            relative ${isMobile ? "  h-[37vh]" : "  h-[43vh]"}`}
          >
            <img
              src={event.imageUrl}
              style={{ width: "100%", height: "100%" }}
              className="object-cover w-full"
              alt="Image"
            />
          </section>

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
                  <Text semibold small lightGray>
                    {formatDateTime(event.startDateTime).dateOnly}
                  </Text>

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
                <FlexCol items="items-start" gap={4}>
                  <Text bold medium darkGray>
                    Date & Time
                  </Text>

                  <FlexRow items="items-start" gap={4}>
                    <LuCalendarHeart size={18} />

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
                  </FlexRow>
                </FlexCol>
              </LineContainer>

              <LineContainer>
                <FlexCol items="items-start" gap={4}>
                  <Text bold medium darkGray>
                    Location
                  </Text>

                  <FlexRow items="items-start" gap={4}>
                    <MdLocationPin size={18} />

                    <FlexCol items="items-start">
                      <Text semibold small>
                        {event.location.toUpperCase()}
                      </Text>

                      <div
                        className="cursor-pointer"
                        onClick={onClickShowMap()}
                      >
                        {!showMap ? (
                          <FlexRow items="items-center" gap={1}>
                            <span className="text-blue-700 p-semibold-14">
                              Show map
                            </span>

                            <FaAngleDown color={"blue"} size={16} />
                          </FlexRow>
                        ) : (
                          <FlexRow items="items-center" gap={1}>
                            <span className="text-blue-700 p-semibold-14">
                              Hide map
                            </span>

                            <FaAngleUp color={"blue"} size={16} />
                          </FlexRow>
                        )}
                      </div>
                    </FlexCol>
                  </FlexRow>

                  {showMap && <div>Implement Map here...</div>}
                </FlexCol>
              </LineContainer>

              <LineContainer>
                <FlexCol items="items-start" gap={4}>
                  <Text bold medium darkGray>
                    About this event
                  </Text>

                  <FlexCol gap={3}>
                    <FlexRow items="items-center">
                      <CiTimer />
                      <Text semibold small darkGray>
                        2 hours
                      </Text>
                    </FlexRow>

                    <FlexRow items="items-center">
                      <IoTicketOutline />
                      <Text semibold small darkGray>
                        Mobile eTicket
                      </Text>
                    </FlexRow>
                  </FlexCol>

                  <Text small>
                    Glimpses Within: Practical Life Lessons from the chronicles
                    of the Prophet Muhammad (saw): Dealing with Stress, Grief,
                    Depression & Challenges in Life
                  </Text>
                </FlexCol>
              </LineContainer>

              <LineContainer>
                <FlexCol items="items-start" gap={4}>
                  <Text bold medium darkGray>
                    About the organizer
                  </Text>

                  <FlexRow
                    justify="justify-between"
                    items="items-center"
                    widthFull
                  >
                    <FlexCol items="items-start">
                      <FlexRow gap={1}>
                        <Text small>Hosted by</Text>

                        <Text small semibold darkGray>
                          {event.organizer.firstName} {event.organizer.lastName}
                        </Text>
                      </FlexRow>

                      <Text extraSmall small lightGray>
                        {event.url}
                      </Text>
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
                </FlexCol>
              </LineContainer>
            </div>

            <div
              className="
                md:order-last 
                md:col-span-3
                gap-3
                flex
                flex-col
              "
            >
              {!isMobile && (
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
                        onChange={(e) => setGuestCount(Number(e.target.value))}
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

                      <div className="cursor-pointer my-2 text-center underline">
                        <Text semibold darkGray extraSmall>
                          Share the event with friends
                        </Text>
                      </div>
                    </FlexCol>
                  </FlexCol>
                </LineContainer>
              )}

              <LineContainer>
                <FlexCol items="items-start" gap={4}>
                  <Text bold medium darkGray>
                    Refund Policy
                  </Text>

                  <Text small lightGray>
                    Contact the organizer to request a refund. PartyX's fee is
                    nonrefundable.
                  </Text>
                </FlexCol>
              </LineContainer>
            </div>
          </div>
        </FlexCol>
      </Container>

      <div className="pt-10 pb-20">
        <Container>
          <FlexCol gap={6}>
            {!hasEventsWithSameOrganiser && (
              <LineContainer empty>
                <FlexCol gap={4}>
                  <Text large bold>
                    More events from this organizer
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
                </FlexCol>
              </LineContainer>
            )}

            <LineContainer empty>
              {/* events with the same category */}
              <FlexCol gap={4}>
                <Text large bold>
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
              </FlexCol>
            </LineContainer>
          </FlexCol>
        </Container>
      </div>
    </>
  );
};

export default EventDetails;
