"use client";

import UserProfileCard from "@/components/cards/UserProfileCard";
import { localStorageKeys } from "@/constants";
import ResponseDTO from "@/dto/Response.dto";
import UserDetailsResponseDTO from "@/dto/response/UserDetailsResponse.dto";
import UserService from "@/service/UserService";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserDetailsResponseDTO>();

  const getCurrentUserDetails = async () => {
    const userService = new UserService(
      localStorage.getItem(localStorageKeys.token),
    );

    setLoading(true);
    const response: ResponseDTO<UserDetailsResponseDTO | null, null> =
      await userService.getCurrentUserDetails();
    setLoading(false);

    setUserDetails(response.successPayload!! && response.successPayload);
  };

  useEffect(() => {
    getCurrentUserDetails();
  }, []);

  return (
    <div className="">
      {userDetails && (
        <UserProfileCard
          username={userDetails.username}
          firstName={userDetails.first_name}
          lastName={userDetails.last_name}
          bio={userDetails.bio}
          snapCount={10}
          followerCount={20}
          followingCount={30}
          />
      )}
    </div>
  );
};

export default Page;
