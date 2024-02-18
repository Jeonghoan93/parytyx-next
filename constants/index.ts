import { BiSearch, BiSolidHome } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

export const footerLink = (userId: string) => {
  const UserAgreedPlatform = (userId: string): boolean => {
    // for now return false
    return false;
  };

  return [
    {
      label: "Home",
      icon: BiSolidHome,
      route: "/",
    },
    {
      label: "Search",
      icon: BiSearch,
      route: "/events",
    },
    {
      label: "Profile",
      icon: BsPersonFill,
      route: `${
        UserAgreedPlatform(userId)
          ? `/profile/${userId}`
          : "/platform-agreement"
      }`,
    },
  ];
};

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
