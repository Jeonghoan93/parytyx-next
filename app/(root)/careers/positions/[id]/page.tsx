import Container from "@/components/ui/container";

const PositionPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-start gap-5">
        <div className="flex flex-col items-start gap-3">
          <span className="p-bold-16">Title</span>
          <span className="p-regular-14">Subtitle</span>
          <span>Button to apply</span>
        </div>

        <div className="flex flex-col gap-5 items-start">
          <div>Desc</div>

          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start gap-2">
              <span>Title </span>

              <div className="flex flex-col items-start gap-1">
                <div className="flex flex-row items-start gap-1">
                  <span>icon</span>

                  <span>desc</span>
                </div>

                <div className="flex flex-row items-start gap-1">
                  <span>icon</span>

                  <span>desc</span>
                </div>

                <div className="flex flex-row items-start gap-1">
                  <span>icon</span>

                  <span>desc</span>
                </div>

                <div className="flex flex-row items-start gap-1">
                  <span>icon</span>

                  <span>desc</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span>Button to apply</span>
      </div>
    </Container>
  );
};

export default PositionPage;
