import MediaFileResponseDTO from "@/dto/response/MediaFileResponse.dto";
import React from "react";

interface ICreateSnapFormProps {
  mediaFile: MediaFileResponseDTO;
}

const CreateSnapForm = (props: ICreateSnapFormProps) => {
  const { mediaFile } = props;

  return (
    <video
      src={mediaFile.fileURL}
      height={480}
      width={270}
      autoPlay
      controls
      loop
      className="bg-black"
    ></video>
  );
};

export default CreateSnapForm;
