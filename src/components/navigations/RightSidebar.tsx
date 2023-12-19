import React from "react";

interface IRightSidebarProps {}

const RightSidebar = (props: IRightSidebarProps) => {
  return (
    <div className="sticky right-0 top-0 hidden h-screen w-[300px] flex-col justify-between px-4 pb-4 pt-8 xl:flex">
      <p>Suggested for you</p>
    </div>
  );
};

export default RightSidebar;
