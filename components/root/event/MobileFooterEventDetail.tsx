"use client";

import { getEventById } from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FlexCol from "../../ui/flex-col";
import FlexRow from "../../ui/flex-row";
import Text from "../../ui/text";

const MobileFooterEventDetail = () => {
  const [isLoading, setLoading] = useState(true);
  const [event, setEvent] = useState<any>(null);

  const path = usePathname();

  const eventId = path.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEvent = await getEventById(eventId);
        if (fetchedEvent) {
          setEvent(fetchedEvent);
        }
      } catch (error) {
        console.error("Failed to fetch event details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  const onClickGetInvited = () => {
    return console.log("Get invited");
  };

  return (
    <div
      className={`px-6 py-3 max-h-[85px] border-t-[2px] fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500 `}
    >
      {isLoading ? (
        <Text semibold>Loading ...</Text>
      ) : (
        <FlexRow items="items-center" justify="justify-between">
          <FlexCol gap={1}>
            <Text semibold>SEK {event.price}</Text>
            <Text semibold small lightGray>
              {formatDateTime(event.startDateTime).dateOnly}
            </Text>
          </FlexCol>

          <span
            onClick={() => onClickGetInvited()}
            className="cursor-pointer border-[1px] px-6 py-3 rounded-xl bg-rose-600 bg-gradient-to-r"
          >
            <Text small semibold white>
              Get invited
            </Text>
          </span>
        </FlexRow>
      )}
    </div>
  );
};

export default MobileFooterEventDetail;
