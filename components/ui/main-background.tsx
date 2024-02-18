interface LineContainerProps {
  children: React.ReactNode;
  white?: boolean;
}

const MainBackground: React.FC<LineContainerProps> = ({ children, white }) => {
  return (
    <div
      className={`bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10  ${
        white ? "bg-white" : "bg-primary-50"
      }    `}
    >
      {children}
    </div>
  );
};

export default MainBackground;
