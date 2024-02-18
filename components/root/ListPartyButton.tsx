"use client";

import { getUserById } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListPartyButton = ({ userId }: { userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserOrganiser, setIsUserOrganiser] = useState<boolean | undefined>(
    false
  );

  const onClickListParty = async (
    userId: string
  ): Promise<boolean | undefined> => {
    setIsLoading(true);
    try {
      const user = await getUserById(userId);

      if (user && user.isOrganiser === undefined) {
        console.error("isOrganiser is not defined for this user.");
      }

      return user.isOrganiser;
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkIsOrganiser = async () => {
      setIsUserOrganiser(await onClickListParty(userId));
    };

    checkIsOrganiser();
  }, [userId]);

  return (
    <Link
      href={`${
        isUserOrganiser !== undefined && isUserOrganiser === true
          ? "/events/create"
          : "/become-an-organiser"
      }`}
    >
      <span className="cursor-pointer border-[1pt] bg-white text-gray-800 rounded-xl py-2 px-4 border-gray-50 shadow p-medium-14 sm:p-semibold-14">
        {isLoading ? "Loading..." : "List your party"}
      </span>
    </Link>
  );
};

export default ListPartyButton;
