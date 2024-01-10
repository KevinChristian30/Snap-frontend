import { ChevronRight, LucideProps } from "lucide-react";
import React from "react";

interface ISettingItemProps {
  Icon: React.FC<LucideProps>;
  text: string;
}

const SettingItem = (props: ISettingItemProps) => {
  const { Icon, text } = props;

  return (
    <div className="flex h-12 w-full items-center justify-between rounded-md px-4 hover:cursor-pointer hover:bg-gray-200">
      <div className="flex items-center gap-4">
        <Icon size={20} />
        <p>{text}</p>
      </div>
      <ChevronRight size={20} />
    </div>
  );
};

export default SettingItem;
