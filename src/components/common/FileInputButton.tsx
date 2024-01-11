import { Inbox } from "lucide-react";
import Spacer from "../utils/Spacer";
import { RefObject } from "react";

interface IFileInputProps {
  hiddenFileInput: RefObject<HTMLInputElement>;
}

const FileInputButton = (props: IFileInputProps) => {
  const { hiddenFileInput } = props;

  const triggerFileInput = () => {
    if (hiddenFileInput.current) hiddenFileInput.current.click();
  };

  return (
    <div
      onClick={triggerFileInput}
      className="flex flex-col items-center rounded-md border border-dashed border-primary p-6 ease-in-out hover:cursor-pointer hover:border-solid"
    >
      <p className="ant-upload-drag-icon">
        <Inbox size={80} className="text-primary" />
      </p>
      <Spacer height={16} />
      <p>Click this area to select a file.</p>
      <p className="text-red-500">Max 25 MB.</p>
    </div>
  );
};

export default FileInputButton;
