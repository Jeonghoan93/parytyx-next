"use client";

import { getUserById } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListPartyButton = ({ userId }: { userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserOrganiser, setIsUserOrganiser] = useState<boolean | undefined>(
    false
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | undefined>(
    false
  );

  useEffect(() => {
    const onClickListParty = async (userId: string): Promise<void> => {
      setIsLoading(true);
      try {
        const user = await getUserById(userId);
        setIsUserLoggedIn(!!user);
        if (user) {
          setIsUserOrganiser(user.isOrganiser);
        } else {
          console.error("User not found or not logged in");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    onClickListParty(userId);
  }, [userId, isUserLoggedIn, isUserOrganiser]);

  const navigate = (): string => {
    if (!isUserLoggedIn) {
      return "organise";
    }

    if (isUserOrganiser !== undefined && isUserOrganiser === true) {
      return "events/create";
    }

    return "become-an-organiser";
  };

  return (
    <Link href={`${navigate()}`}>
      <span className="cursor-pointer border-[1pt] bg-white text-gray-800 rounded-xl py-2 px-4 border-gray-50 shadow p-medium-14 sm:p-semibold-14">
        {isLoading ? "Loading..." : "List your party"}
      </span>
    </Link>
  );
};

export default ListPartyButton;
