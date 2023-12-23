interface SimplePhotoCardProps {
  img: string;
  text: string;
}

const SimplePhotoCard: React.FC<SimplePhotoCardProps> = ({ img, text }) => {
  return (
    <div
      className={
        "relative h-[40vh] overflow-hidden md:mb-0 bg-gray-50 border-neutral-200 rounded-lg shadow border-[1px]"
      }
    >
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Stockholm Office"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="text-white font-bold text-[14pt]">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default SimplePhotoCard;
