import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";
import { AiFillHeart } from "react-icons/ai";
import HeartButton from "./HeartButton";

interface EventCardNewProps {
  eventData: IEvent;
}

const EventCardNew: React.FC<EventCardNewProps> = ({ eventData }) => {
  const price = useMemo(() => {
    return eventData.price;
  }, [eventData.price]);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="mb-2 col-span-1 cursor-pointer group"
    >
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
            hover:shadow-lg
          "
        >
          <Link href={`/event/${eventData._id}`}>
            <img
              className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
              
            "
              src={eventData.imageUrl}
              alt="Event"
            />
          </Link>
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
            <div className="p-bold-14 sm:p-bold-16">
              {eventData.title.length > 18
                ? `${eventData.title.slice(0, 18)}...`
                : eventData.title}
            </div>
            <div className="flex flex-row items-center gap-1">
              <span>
                <AiFillHeart size={16} />
              </span>
              <span className="p-semibold-14 sm:p-semibold-16">4.5</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="p-regular-12 sm:p-regular-14 text-gray-600">
              {eventData.location}
            </span>
            <span className="p-semibold-12 sm:p-semibold-14">
              {formatDateTime(eventData.startDateTime).dateTime}
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <div className="p-bold-14 sm:p-bold-16">SEK {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardNew;
