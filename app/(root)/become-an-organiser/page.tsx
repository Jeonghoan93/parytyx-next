import FlexCol from "@/components/ui/flex-col";
import FlexRow from "@/components/ui/flex-row";
import Text from "@/components/ui/text";
import { auth } from "@clerk/nextjs";

const BecomeOrganiserPage = () => {
  const { sessionClaims } = auth();

  // const userId = sessionClaims?.userId as string;

  return (
    <div className="wrapper h-screen sm:h-full">
      <div
        className={
          "flex flex-col gap-10 sm:flex-row sm:items-center sm:h-[70vh] sm:justify-between"
        }
      >
        <Text extraLarge semibold>
          It’s easy to get started on PartyX
        </Text>

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

export default BecomeOrganiserPage;
