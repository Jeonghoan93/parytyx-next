import { BiSearch, BiSolidHome } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

export const headerLinks = [
  {
    label: "Find party",
    route: "/events",
  },
  {
    label: "List party",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const footerLink = [
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
    route: "/profile",
  },
];

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
