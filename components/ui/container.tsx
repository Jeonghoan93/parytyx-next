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
        sm:px-6
        p-1
      "
    >
      {children}
    </div>
  );
};

export default Container;
