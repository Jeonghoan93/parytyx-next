"use client";

import LoadingState from "@/components/LoadingState";
import CategoryFilter from "@/components/shared/CategoryFilter";
import EventsCollection from "@/components/shared/EventsCollection";
import Search from "@/components/shared/Search";
import Container from "@/components/ui/container";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { useEffect, useState } from "react";

const Events = ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const [events, setEvents] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

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
      <section className="wrapper flex flex-col gap-4 md:gap-12">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
      </section>

      <Container>
        <EventsCollection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </Container>
    </>
  );
};

export default Events;
