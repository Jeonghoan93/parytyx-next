import { useMemo } from "react";

import { formatDateTime } from "@/lib/utils";
import { AiFillHeart } from "react-icons/ai";
import HeartButton from "./HeartButton";
import FlexRow from "./ui/flex-row";
import Text from "./ui/text";

interface EventCardProps {
  eventData: any;
}

const EventCard: React.FC<EventCardProps> = ({ eventData }) => {
  const price = useMemo(() => {
    return eventData.price;
  }, [eventData.price]);

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
            hover:shadow-lg
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
            <div className="p-bold-14 sm:p-bold-16">
              {eventData.title.length > 18
                ? `${eventData.title.slice(0, 18)}...`
                : eventData.title}
            </div>
            <div className="flex flex-row items-center gap-1">
              <span>
                <AiFillHeart size={16} />
              </span>
              <span className="p-semibold-14 sm:p-semibold-16">
                {eventData.avgRating}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="p-regular-12 sm:p-regular-14 text-gray-600">
              {eventData.address.street}, {eventData.address.city}
            </span>
            <span className="p-semibold-12 sm:p-semibold-14">
              <FlexRow>
                <Text semibold extraSmall darkGray>
                  {formatDateTime(eventData.startDate).dateOnly} -{" "}
                  {formatDateTime(eventData.startDate).timeOnly}
                </Text>
                -
                <Text semibold extraSmall darkGray>
                  {formatDateTime(eventData.endDate).dateOnly} -{" "}
                  {formatDateTime(eventData.endDate).timeOnly}
                </Text>
              </FlexRow>
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <div className="p-bold-14 sm:p-bold-16">
              {eventData.currency} {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
