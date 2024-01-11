import React from "react";

interface ICreateSnapFormProps {
  videoURL: string;
}

const CreateSnapForm = (props: ICreateSnapFormProps) => {
  const { videoURL } = props;

  return (
    <video
      src={videoURL}
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
