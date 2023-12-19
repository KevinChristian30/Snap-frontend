import { bottombarItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Bottombar = () => {
  return (
    <div className="sticky bottom-0 flex justify-around px-4 py-2 md:hidden border-top-gray">
      {bottombarItems.map((item) => {
        return (
          <Link href={item.url}>
            <item.icon className="h-6 w-6 text-black" />
          </Link>
        );
      })}
    </div>
  );
};

export default Bottombar;
