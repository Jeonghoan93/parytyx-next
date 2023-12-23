interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w-[1377px]
        mx-auto
        xl:px-30
        md:px-12
        sm:px-2
        px-5
        pt-4
      "
    >
      {children}
    </div>
  );
};

export default Container;
