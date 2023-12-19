import React from "react";
import LeftSidebarItem from "./LeftSidebarItem";
import Icons from "../Icons";
import { Dropdown, MenuProps } from "antd";
import {
  Bookmark,
  GanttChartSquare,
  LucideMenu,
  LucideSettings,
} from "lucide-react";
import { leftSidebarItems } from "@/constants";
import Link from "next/link";

interface ILeftSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link href={"/settings"}>
        <LeftSidebarItem Icon={LucideSettings} text="Settings" />
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href={"/activity/me"}>
        <LeftSidebarItem Icon={GanttChartSquare} text="Your Activity" />
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href={"/saved"}>
        <LeftSidebarItem Icon={Bookmark} text="Saved" />
      </Link>
    ),
  },
];

const LeftSidebar = (props: ILeftSidebarProps) => {
  return (
    <div className="border-right-gray sticky left-0 top-0 hidden h-screen w-[100px] overflow-y-auto flex-col justify-between p-2 lg:w-[250px] md:flex">
      <div className="flex items-center gap-2 p-4 hover:cursor-pointer">
        <Icons.logo className="h-8 w-8" />
        <p className="hidden text-xl font-bold lg:block">Snap</p>
      </div>

      <div className="flex flex-col gap-2">
        {leftSidebarItems.map((item) => {
          return <LeftSidebarItem Icon={item.icon} text={item.text} />;
        })}
      </div>

      <Dropdown menu={{ items }} placement="topLeft" trigger={["click"]}>
        <LeftSidebarItem Icon={LucideMenu} text="More" />
      </Dropdown>
    </div>
  );
};

export default LeftSidebar;
