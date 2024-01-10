import SettingItem from "@/components/navigations/SettingItem";
import { settingItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col py-8 px-4 gap-8">
      <h1>Settings</h1>

      <div className="">
        {settingItems.map((item) => {
          return (
            <Link href={item.url} className="no-underline text-black">
              <SettingItem Icon={item.icon} text={item.text} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
