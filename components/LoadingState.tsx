import Heading from "./ui/Heading";

const LoadingState = () => {
  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={"Loading..."} subtitle={"Please wait"} />
    </div>
  );
};

export default LoadingState;
