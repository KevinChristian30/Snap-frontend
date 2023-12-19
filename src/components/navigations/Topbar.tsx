import React from "react";
import { topbarItems } from "@/constants";
import Link from "next/link";
import Icons from "../Icons";

const Topbar = () => {
  return (
    <div className="sticky top-0 flex w-full justify-between py-2 px-4 md:hidden z-50 bg-white border-gray-400 border-bottom-gray">
      <div className="flex gap-2 items-center">
        <Icons.logo className="h-6 w-6" />
        <p className="font-bold">Snap</p>
      </div>
      <div className="flex gap-2">
        {topbarItems.map((item) => {
          return (
            <Link href={item.url}>
              <item.icon className="h-6 w-6 text-black" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Topbar;
