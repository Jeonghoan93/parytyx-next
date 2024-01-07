import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/shared/CategoryFilter";
import EventsCollection from "@/components/shared/EventsCollection";
import Search from "@/components/shared/Search";
import Container from "@/components/ui/container";
import { eventsMock } from "@/constants/mock-events";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Link from "next/link";

const Events = async ({ searchParams }: SearchParamProps) => {
  if (eventsMock.length === 0) {
    return <div>No event data</div>;
  }

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
      <section id="events" className="wrapper flex flex-col gap-4 md:gap-12">
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

      <Container>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3"
          }
        >
          {eventsMock.map((event) => (
            <Link href={`/events/${event.eventId}`}>
              <EventCard key={event.eventId} eventData={event} />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Events;
