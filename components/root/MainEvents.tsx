"use client";

import LoadingState from "@/components/LoadingState";
import EventsCollection from "@/components/shared/EventsCollection";
import FlexCol from "@/components/ui/flex-col";
import FlexRow from "@/components/ui/flex-row";
import MainBackground from "@/components/ui/main-background";
import Text from "@/components/ui/text";
import { getAllEvents } from "@/lib/actions/event.actions";
import useCurrentLocation from "@/src/hooks/useCurrentLocation";
import { SearchParamProps } from "@/types";
import { useEffect, useState } from "react";
import EmptyState from "../EmptyState";

const MainEvents = ({
  searchParams,
}: {
  searchParams: SearchParamProps["searchParams"];
}) => {
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

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <MainBackground>
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
                <Text extraSmall lightGray semibold underline>
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
                  <Text extraSmall lightGray semibold underline>
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
      </MainBackground>

      <MainBackground white>
        <div className="wrapper">
          <FlexCol gap={5}>
            <Text bold large>
              Upcoming Events
            </Text>

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
      </MainBackground>
    </>
  );
};

export default MainEvents;
