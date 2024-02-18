import { auth } from "@clerk/nextjs";

const BecomeOrganiserPage = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <div className="wrapper my-2">
      hi
      {/* <NewEventForm userId={userId} type="Create" /> */}
    </div>
  );
};

export default BecomeOrganiserPage;
