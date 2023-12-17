interface LineContainerProps {
  children: React.ReactNode;
  dark?: boolean;
}

const LineContainer: React.FC<LineContainerProps> = ({ children, dark }) => {
  return (
    <div
      className={`p-4 ${
        dark
          ? "bg-black text-white border-neutral-800"
          : "bg-gray-50 border-neutral-200"
      } rounded-lg shadow border-[1px] `}
    >
      {children}
    </div>
  );
};

export default LineContainer;
