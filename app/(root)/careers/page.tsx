import SimplePhotoCard from "@/components/root/careers/SimplePhotoCard";
import Container from "@/components/ui/container";
import LineContainer from "@/components/ui/line-container";
import Link from "next/link";

const Careerspage = () => {
  return (
    <Container>
      <div
        className="
    py-5
    sm:py-10
    max-w-screen-xl 
    mx-auto
  "
      >
        <div className="flex flex-col gap-4">
          <div
            className="
        grid 
        grid-cols-1 
        md:grid-cols-7 
        md:gap-3 
      "
          >
            <div className="flex flex-col gap-3 col-span-4 mb-3">
              <LineContainer>
                <div className="p-3">
                  <div className="flex flex-col gap-6">
                    <span
                      style={{ maxWidth: "400px" }}
                      className="text-[32pt] font-extrabold "
                    >
                      This might be the one ride of your life
                    </span>

                    <Link href={"/careers/positions"}>
                      <span className="cursor-pointer underline text-[13pt] font-semibold">
                        Discover all opportunities
                      </span>
                    </Link>
                  </div>
                </div>
              </LineContainer>

              <LineContainer>
                <div className="p-3">
                  <div className="flex flex-col gap-6">
                    <span
                      style={{ maxWidth: "400px" }}
                      className="text-[24pt] font-extrabold "
                    >
                      WE ARE GOING TO MAKE PARTY EVERYDAY EVERYWHERE
                    </span>

                    <span className="text-[12pt]">
                      Everyone at PartyX has an important part to play. What’s
                      yours going to be?
                    </span>

                    <Link href={"/careers/positions"}>
                      <span className="cursor-pointer font-semibold text-[14pt] underline">
                        LEARN MORE
                      </span>
                    </Link>
                  </div>
                </div>
              </LineContainer>
            </div>
            <div
              className="
          md:order-last 
          md:col-span-3
        "
            >
              <div className="flex flex-col gap-3">
                <SimplePhotoCard
                  img={"/assets/images/office1.jpg"}
                  text={"Stockholm Office"}
                />
                <SimplePhotoCard
                  img={"/assets/images/office2.jpg"}
                  text={"Berlin Office"}
                />
                <SimplePhotoCard
                  img={"/assets/images/office3.jpg"}
                  text={"Amsterdam Office"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Careerspage;
