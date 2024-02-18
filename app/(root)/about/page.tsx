import IconTextDesc from "@/components/IconTitleDesc";
import MainPhoto from "@/components/root/MainPhoto";
import FlexCol from "@/components/ui/flex-col";
import { auth } from "@clerk/nextjs";
import { FaRegGrinHearts, FaSpotify } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { MdSecurityUpdateGood, MdTravelExplore } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const About = async () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <MainPhoto userId={userId} />

      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2">
          <FlexCol gap={10}>
            <IconTextDesc
              icon={<TbWorld size={26} />}
              title={"The global guide of local scenes"}
              desc={
                "Discover the best events, clubs, festivals and DJs near you in over 155 countries."
              }
            />

            <IconTextDesc
              icon={<IoTicketOutline size={26} />}
              title={"Secure the tickets"}
              desc={
                "Pay with Apple Pay, Google Pay, PayPal, Amex and credit cards in your local currency."
              }
            />

            <IconTextDesc
              icon={<MdTravelExplore size={26} />}
              title={"Deep discovery"}
              desc={
                "Filter events by type, size, genre, date, popularity, PartyX Picks and For You."
              }
            />

            <IconTextDesc
              icon={<FaSpotify size={26} />}
              title={"Import your music taste"}
              desc={
                "Sync with Spotify to power up your personalised event discovery (coming soon)."
              }
            />
          </FlexCol>

          <FlexCol gap={10}>
            <IconTextDesc
              icon={<FaRegGrinHearts size={26} />}
              title={"Artist Notifications"}
              desc={"Never miss your favourite DJ playing in your local city."}
            />

            <IconTextDesc
              icon={<MdSecurityUpdateGood size={26} />}
              title={"Get in stress-free"}
              desc={
                "Display your tickets in-app and never miss last entry with Maps and Uber integrations."
              }
            />

            <IconTextDesc
              icon={<RiSecurePaymentLine size={26} />}
              title={"Buy with confidence"}
              desc={
                "Benefit from industry-leading anti-tout technology and our fully-featured resale system."
              }
            />

            <IconTextDesc
              icon={<IoIosNotificationsOutline size={26} />}
              title={"Ticket notifications"}
              desc={
                "Get notified as soon as a ticket to a sold out event becomes available (coming soon)."
              }
            />
          </FlexCol>
        </div>
      </section>
    </>
  );
};

export default About;
