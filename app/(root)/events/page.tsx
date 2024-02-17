import CategoryFilter from "@/components/shared/CategoryFilter";
import EventsCollection from "@/components/shared/EventsCollection";
import Search from "@/components/shared/Search";
import Container from "@/components/ui/container";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

const Events = async ({ searchParams }: SearchParamProps) => {
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
    </>
  );
};

export default Events;
