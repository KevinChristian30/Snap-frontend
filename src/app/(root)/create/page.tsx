"use client";

import FileInputButton from "@/components/common/FileInputButton";
import CreateSnapForm from "@/components/forms/CreateSnapForm";
import { localStorageKeys } from "@/constants";
import ResponseDTO from "@/dto/Response.dto";
import MediaFileRequestDTO from "@/dto/request/MediaFileRequest.dto";
import MediaFileResponseDTO from "@/dto/response/MediaFileResponse.dto";
import MediaFileService from "@/service/MediaFileService";
import { Skeleton } from "antd";
import React, { useRef, useState } from "react";

const Page = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [video, setVideo] = useState<MediaFileResponseDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const mediaFileService = new MediaFileService(
        localStorage.getItem(localStorageKeys.token),
      );

      let formData: FormData = new FormData();
      formData.append("file", e.target.files[0]);
      setLoading(true);
      const response: ResponseDTO<MediaFileResponseDTO | null, string[]> =
        await mediaFileService.upload(new MediaFileRequestDTO(formData));
      setLoading(false);

      setVideo(response.successPayload);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <input
        type="file"
        accept="video/*"
        className="hidden"
        onChange={(e) => handleFileChange(e)}
        ref={hiddenFileInput}
      />
      <h1>Create Snap</h1>
      {loading ? (
        <Skeleton.Image active style={{ width: "100%" }} />
      ) : video ? (
        <CreateSnapForm mediaFile={video} />
      ) : (
        <FileInputButton hiddenFileInput={hiddenFileInput} />
      )}
    </div>
  );
};

export default Page;
