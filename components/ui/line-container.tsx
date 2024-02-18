interface LineContainerProps {
  children: React.ReactNode;
  empty?: boolean;
}

const LineContainer: React.FC<LineContainerProps> = ({ children, empty }) => {
  return (
    <div
      className={` ${
        empty
          ? "p-2 border-t-2 border-neutral-200 border-dashed"
          : "bg-gray-50 border-neutral-200 border-[1px] shadow rounded-lg p-4"
      }    `}
    >
      {children}
    </div>
  );
};

export default LineContainer;
