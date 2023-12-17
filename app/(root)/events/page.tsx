import EventCard from "@/components/EventCard";
import Container from "@/components/ui/container";
import { events } from "@/constants/mock-events";

const Events = () => {
  if (events.length === 0) {
    return <div>No event data</div>;
  }

  return (
    <Container>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3"
        }
      >
        {events.map((event) => (
          <EventCard key={event.eventId} eventData={event} />
        ))}
      </div>
    </Container>
  );
};

export default Events;
