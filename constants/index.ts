import { BiSearch, BiSolidHome } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

export const headerLinks = (userId: string) => {
  return [
    {
      label: "Find party",
      route: "/events",
    },
    {
      label: "List party",
      route: "/profile/create",
    },
    {
      label: "My Profile",
      route: `/profile/${userId}}`,
    },
  ];
};

export const footerLink = (userId: string) => {
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
      route: `/profile/${userId}`,
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
