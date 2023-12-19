import { LucideProps } from "lucide-react";
import React, { ReactNode } from "react";

interface ILeftSidebarProps {
  Icon: React.FC<LucideProps>;
  text: string;
}

const LeftSidebarItem = (props: ILeftSidebarProps) => {
  const { Icon, text } = props;

  return (
    <div className="flex items-center justify-center lg:justify-start gap-2 rounded-md p-4 hover:cursor-pointer hover:bg-gray-200">
      <Icon className="h-6 w-6" />
      <p className="font-bold hidden lg:block">{text}</p>
    </div>
  );
};

export default LeftSidebarItem;
