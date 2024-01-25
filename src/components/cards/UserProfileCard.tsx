import { Card, Statistic, Typography } from "antd";
import React from "react";
import Spacer from "../utils/Spacer";

interface IUserProfileCardProps {
  username: string;
  snapCount: number;
  followerCount: number;
  followingCount: number;
  firstName: string;
  lastName: string;
  bio: string;
}

const UserProfileCard = (props: IUserProfileCardProps) => {
  const {
    username,
    snapCount,
    followerCount,
    followingCount,
    firstName,
    lastName,
    bio,
  } = props;

  return (
    <div className="flex flex-col">
      <Typography.Title>{username}</Typography.Title>
      <div className="flex gap-8">
        <Statistic title="Snaps" value={snapCount} />
        <Statistic title="Follower" value={followerCount} />
        <Statistic title="Following" value={followingCount} />
      </div>
      <Spacer height={16} />
      <Typography.Text strong className="text-xl">
        {firstName + " " + (lastName ? lastName : "")}
      </Typography.Text>
      <Typography.Text>{bio ? bio : "No Bio"}</Typography.Text>
    </div>
  );
};

export default UserProfileCard;
