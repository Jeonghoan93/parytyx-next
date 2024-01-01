import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <div className="wrapper my-2">
      <EventForm userId={userId} type="Create" />
    </div>
  );
};

export default CreateEvent;
