"use client";

import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps, message } from "antd";
import React from "react";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1>Create Snap</h1>{" "}
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag video to upload.</p>
        <p className="ant-upload-hint">MP4 or WebM.</p>
        <p className="text-primary">Up to 60 seconds.</p>
        <p className="text-red-500">Less than 1 GB.</p>
      </Dragger>
    </div>
  );
};

export default Page;
