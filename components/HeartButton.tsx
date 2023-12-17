import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  className?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div
        className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
      >
        <AiOutlineHeart
          size={28}
          className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
        />
        <AiFillHeart size={24} className={"fill-gray-500"} />
      </div>
    </div>
  );
};

export default HeartButton;
