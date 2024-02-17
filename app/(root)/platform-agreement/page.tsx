"use client";

import FlexCol from "@/components/ui/flex-col";
import Text from "@/components/ui/text";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";
import Link from "next/link";

const PlatformAgreementPage = () => {
  const getUserId = () => {
    return "userId";
  };

  const isMobile = useWindowWidth() < 768;

  const onBanThisUser = () => {
    console.log("Ban this user");
  };

  return (
    <div
      className="
        h-[60vh]
        flex 
        justify-center 
        items-center 
      "
    >
      <div className={`${isMobile ? "max-w-sm" : "max-w-xl"}`}>
        <FlexCol items="items-start" gap={6}>
          <Text bold>PARTYX</Text>

          <FlexCol items="items-start" gap={2}>
            <Text darkGray semibold extraSmall>
              Our community commitment
            </Text>

            <Text large semibold>
              PartyX is a community where anyone can belong
            </Text>
          </FlexCol>

          <FlexCol items="items-start" gap={2}>
            <Text extraSmall darkGray>
              To ensure this, we’re asking you to commit to the following:
            </Text>

            <Text extraSmall darkGray>
              I agree to treat everyone in the PartyX community—regardless of
              their race, religion, national origin, ethnicity, disability, sex,
              gender identity, sexual orientation, or age—with respect, and
              without judgment or bias.
            </Text>
          </FlexCol>

          <FlexCol items="items-center" widthFull gap={4}>
            <span className="text-center w-full bg-cyan-200 py-2 rounded-lg cursor-pointer">
              <Link href={`profile/${getUserId()}`}>
                <Text semibold extraSmall>
                  Agree and continue
                </Text>
              </Link>
            </span>

            <span className="text-center w-full border-[1px] py-2 rounded-lg cursor-pointer">
              <div onClick={onBanThisUser}>
                <Text semibold extraSmall>
                  Decline
                </Text>
              </div>
            </span>
          </FlexCol>
        </FlexCol>
      </div>
    </div>
  );
};

export default PlatformAgreementPage;
