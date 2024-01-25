"use client";

import MediaFileResponseDTO from "@/dto/response/MediaFileResponse.dto";
import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import React, { useState } from "react";
import Spacer from "../utils/Spacer";
import SnapCreateRequestDTO from "@/dto/request/SnapCreateRequest.dto";
import SnapService from "@/service/SnapService";
import { localStorageKeys } from "@/constants";
import ResponseDTO from "@/dto/Response.dto";
import { useRouter } from "next/navigation";

interface ICreateSnapFormProps {
  mediaFile: MediaFileResponseDTO;
}

const CreateSnapForm = (props: ICreateSnapFormProps) => {
  const { mediaFile } = props;
  const [loading, setLoading] = useState<boolean>();
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const openSnapCreationFailedNotification = () => {
    api.error({
      message: `Snap Creation Failed`,
      description: "Please try again.",
      placement: "top",
    });
  };

  const openSnapCreationSucessfulNotification = () => {
    api.success({
      message: `Snap Created Successfully`,
      description: "Close this pop up and we'll redirect you back home.",
      placement: "top",
      onClose: () => {
        router.push("/");
      },
    });
  };

  const createSnap = async (dto: SnapCreateRequestDTO) => {
    const snapService = new SnapService(localStorage.getItem(localStorageKeys.token));
    setLoading(true);
    const response: ResponseDTO<null, string[]> = await snapService.createSnap(dto);
    setLoading(false);

    if (response.successful) {
      openSnapCreationSucessfulNotification();
    } else {
      openSnapCreationFailedNotification();
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
      {contextHolder}
      <video
        src={mediaFile.fileURL}
        height={480}
        width={270}
        autoPlay
        controls
        loop
        className="bg-black"
      ></video>

      <Form
        layout="vertical"
        className="flex w-full flex-col items-center"
        onFinish={(values) => {
          createSnap(new SnapCreateRequestDTO(values.description, mediaFile.id));
        }}
        disabled={loading}
      >
        <Form.Item
          name="description"
          label="Description"
          className="w-full"
        >
          <Input.TextArea
            showCount
            autoSize={{ minRows: 3 }}
            placeholder="Description"
            maxLength={255}
            allowClear
          />
        </Form.Item>
        <Spacer height={32} />
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            shape="round"
            icon={<SaveOutlined />}
            block
            loading={loading}
          >
            Create Post
          </Button>
      </Form>
    </div>
  );
};

export default CreateSnapForm;
