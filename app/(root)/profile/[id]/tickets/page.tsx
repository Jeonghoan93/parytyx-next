import Collection from "@/components/shared/Collection";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";

const Tickets = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  return (
    <section className="wrapper my-8">
      <Collection
        data={orderedEvents}
        emptyTitle="No event tickets purchased yet"
        emptyStateSubtext="No worries - plenty of exciting events to explore!"
        collectionType="My_Tickets"
        limit={3}
        page={ordersPage}
        urlParamName="ordersPage"
        totalPages={orders?.totalPages}
      />
    </section>
  );
};

export default Tickets;
