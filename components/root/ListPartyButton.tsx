"use client";

import { getUserById } from "@/lib/actions/user.actions";
import { useState } from "react";
import LoadingState from "../LoadingState";

const ListPartyButton = ({ userId }: { userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClickListParty = async (userId: string) => {
    setIsLoading(true); // Start loading
    try {
      const user = await getUserById(userId);
      console.log("User", user);

      if (user && user.isOrganiser === undefined) {
        // add isOrganiser to user
      }

      user.isOrganiser === true
        ? console.log("User is an organiser")
        : console.log("User is not an organiser");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <span
      onClick={() => onClickListParty(userId)}
      className="cursor-pointer border-[1pt] bg-white text-gray-800 rounded-xl py-2 px-4 border-gray-50 shadow p-medium-14 sm:p-semibold-14"
    >
      List your party
    </span>
  );
};

export default ListPartyButton;
