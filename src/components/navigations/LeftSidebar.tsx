import React from "react";
import LeftSidebarItem from "./LeftSidebarItem";
import Icons from "../Icons";
import { Dropdown, MenuProps } from "antd";
import {
  Bookmark,
  GanttChartSquare,
  LucideMenu,
  LucideSettings,
  LogOut,
} from "lucide-react";
import { leftSidebarItems } from "@/constants";
import Link from "next/link";

interface ILeftSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const items: MenuProps["items"] = [
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
  {
    key: "4",
    label: (
      <Link href={"/sign-out"}>
        <LeftSidebarItem Icon={LogOut} text="Sign Out" />
      </Link>
    ),
  },
];

const LeftSidebar = (props: ILeftSidebarProps) => {
  return (
    <div className="border-right-gray sticky left-0 top-0 hidden h-screen w-[100px] flex-col justify-between overflow-y-auto p-2 md:flex lg:w-[250px]">
      <Link href={"/"} className="no-underline">
        <div className="flex items-center gap-2 p-4 hover:cursor-pointer">
          <Icons.logo className="h-8 w-8 text-black" />
          <p className="hidden text-xl font-bold text-black lg:block">Snap</p>
        </div>
      </Link>

      <div className="flex flex-col gap-2">
        {leftSidebarItems.map((item) => {
          return (
            <Link href={item.url} className="no-underline">
              <LeftSidebarItem Icon={item.icon} text={item.text} />
            </Link>
          );
        })}
      </div>

      <Dropdown menu={{ items }} placement="topLeft" trigger={["click"]}>
        <LeftSidebarItem Icon={LucideMenu} text="More" />
      </Dropdown>
    </div>
  );
};

export default LeftSidebar;
