"use client";

import FileInputButton from "@/components/common/FileInputButton";
import CreateSnapForm from "@/components/forms/CreateSnapForm";
import React, { useRef, useState } from "react";

const Page = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [videoURL, setVideoURL] = useState<string>("");

  return (
    <div className="flex flex-col gap-8">
      <h1>Create Snap</h1>

      <input
        type="file"
        accept="video/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            // Todo: Upload File
            // Todo: Display Form

            // Display video with the URL from cloud
            // setVideoURL(URL.createObjectURL(e.target.files[0]));
          }
            
        }}
        ref={hiddenFileInput}
      />

      {videoURL ? (
        <CreateSnapForm videoURL={videoURL} />
      ) : (
        <FileInputButton hiddenFileInput={hiddenFileInput} />
      )}
    </div>
  );
};

export default Page;
