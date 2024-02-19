"use client";

import FlexCol from "@/components/ui/flex-col";
import FlexRow from "@/components/ui/flex-row";
import Text from "@/components/ui/text";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const OrganisePage = () => {
  const isMobile = useWindowWidth() < 768;

  const [state, setState] = useState({
    totalEarnings: 0,
    guestCount: 15,
    earningPerGuest: 120,
    currency: "kr SEK",
    timesPerMonth: 10,
    earningPerTime: 0,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      earningPerTime: prevState.earningPerGuest * prevState.guestCount,
      totalEarnings: prevState.timesPerMonth * prevState.earningPerTime,
    }));
  }, [
    state.earningPerTime,
    state.timesPerMonth,
    state.guestCount,
    state.earningPerGuest,
  ]);

  return (
    <div className="wrapper my-20">
      <div
        className={`flex ${
          isMobile
            ? "gap-20 flex-col"
            : "gap-0 flex-row h-[60vh] justify-between items-center"
        }`}
      >
        <FlexCol items="items-center" gap={3}>
          <span className="shadow-text font-semibold text-[25px] text-sky-700">
            List event.
          </span>

          <Text extraLarge semibold>
            You could earn
          </Text>

          <Text extraLarge semibold>
            {state.totalEarnings} {state.currency}
          </Text>

          <FlexRow>
            <Text>{state.guestCount} guests</Text>
            <Text>
              {state.timesPerMonth} {state.timesPerMonth < 2 ? "time" : "times"}{" "}
              {""}a month
            </Text>
          </FlexRow>

          <div className="mt-10 cursor-pointer border-[1px] px-6 py-2 rounded-3xl w-full">
            <FlexRow items="items-center" gap={3}>
              <IoSearch size={20} color={"red"} />

              <FlexCol gap={0}>
                <Text semibold>Stockholm</Text>
                <FlexRow gap={1}>
                  <Text extraSmall lightGray>
                    {" "}
                    15 guests
                  </Text>
                  <Text extraSmall lightGray>
                    {" "}
                    10 times
                  </Text>
                </FlexRow>
              </FlexCol>
            </FlexRow>
          </div>
        </FlexCol>

        <FlexCol gap={10}>
          <FlexRow items="items-start" gap={3}>
            <Text semibold medium>
              1
            </Text>

            <FlexCol items={"items-start"} gap={1}>
              <Text medium semibold>
                Tell us about your event
              </Text>
              <Text lightGray>
                Share some basic info, like where it is and when it starts.
              </Text>
            </FlexCol>
          </FlexRow>

          <div className="py-1 border-b-[2px] border-dotted"></div>

          <FlexRow items="items-start" gap={3}>
            <Text semibold medium>
              2
            </Text>

            <FlexCol items={"items-start"} gap={1}>
              <Text medium semibold>
                Make it stand out
              </Text>
              <Text lightGray>
                Add 5 or more photos plus a title and description—we’ll help you
                out.
              </Text>
            </FlexCol>
          </FlexRow>

          <div className="py-1 border-b-[2px] border-dotted"></div>

          <FlexRow items="items-start" gap={3}>
            <Text semibold medium>
              3
            </Text>

            <FlexCol items={"items-start"} gap={1}>
              <Text medium semibold>
                Finish up and publish
              </Text>
              <Text lightGray>
                Choose if you'd like to start with an experienced guest, set a
                price, and publish your listing.
              </Text>
            </FlexCol>
          </FlexRow>
        </FlexCol>
      </div>
      {/* <NewEventForm userId={userId} type="Create" /> */}
    </div>
  );
};

export default OrganisePage;
