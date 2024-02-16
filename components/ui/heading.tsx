interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-[14pt] text-neutral-800 font-bold">{title}</div>
      <div className="font-semibold text-[12pt] text-gray-400 mt-1">
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
