import { useMemo } from "react";

import { formatDate } from "@/src/utils/formatDate";
import { AiFillHeart } from "react-icons/ai";
import HeartButton from "./HeartButton";

interface EventCardProps {
  eventData: any;
  booking?: any;
  onAction?: (id: number) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: number;
}

const EventCard: React.FC<EventCardProps> = ({ eventData, booking }) => {
  const price = useMemo(() => {
    if (booking) {
      return booking.totalAmount;
    }

    return eventData.price;
  }, [booking, eventData.price]);

  return (
    <div className="mb-2 col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-md
            border-neutral-100
            shadow-md
          "
        >
          <img
            style={{ width: "100%", height: "100%" }}
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
              
            "
            src={eventData.img}
            alt="Event"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton />
          </div>
        </div>

        <div className="px-2 py-1 flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center">
            <div className="font-extrabold text-[12pt]">
              {eventData.title.length > 18
                ? `${eventData.title.slice(0, 18)}...`
                : eventData.title}
            </div>
            <div className="flex flex-row items-center gap-1">
              <span>
                <AiFillHeart size={16} />
              </span>
              <span className="font-semibold text-[12pt]">
                {eventData.avgRating}
              </span>
            </div>
          </div>

          <div className="flex flex-col text-gray-800 text-[11pt]">
            <span>
              {eventData.address.street}, {eventData.address.city}
            </span>
            <span>
              {formatDate(eventData.startDate, {
                timeIncluded: true,
                endDate: eventData.endDate,
              })}
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <div className="font-bold">
              {eventData.currency} {price}
            </div>
            {!booking && <div className="font-light">{""}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
