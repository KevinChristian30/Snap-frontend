"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import { localStorageKeys } from "@/constants";
import ResponseDTO from "@/dto/Response.dto";
import SignInRequestDTO from "@/dto/request/SignInRequest.dto";
import SignInResponseDTO from "@/dto/response/SignInResponse.dto";
import AuthenticationService from "@/service/AuthenticationService";
import {
  GoogleOutlined,
  KeyOutlined,
  LoginOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const gap = 24;

const Page = () => {
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const openSignInFailedNotification = () => {
    api.error({
      message: `Sign in failed`,
      description: "Invalid credentials, please try again.",
      placement: "top",
    });
  };

  const openSignInSucessfulNotification = () => {
    api.success({
      message: `Login Successful`,
      description: "Hang on tight, we're redirecting you.",
      placement: "top",
      duration: 0.1,
      onClose: () => {
        router.push("/");
      },
    });
  };

  const signIn = async (dto: SignInRequestDTO) => {
    const authenticationService: AuthenticationService =
      new AuthenticationService();

    setLoading(true);
    const response: ResponseDTO<SignInResponseDTO | null, string[]> =
      await authenticationService.signIn(dto);
    setLoading(false);

    if (response.successful && response.successPayload) {
      localStorage.setItem(localStorageKeys.token, response.successPayload.token);
      openSignInSucessfulNotification();
    } else {
      openSignInFailedNotification();
    }
  };

  return (
    <div className="bg-diagonal-lines flex min-h-screen items-center justify-center">
      {contextHolder}
      <div className="m-4 flex w-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Form
          layout="vertical"
          className="flex w-full flex-col items-center"
          onFinish={(values) =>
            signIn(new SignInRequestDTO(values.email, values.password))
          }
          disabled={loading}
        >
          <Form.Item
            name="email"
            label="Email"
            className="w-full"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              placeholder="Email"
              size="large"
              prefix={<MailOutlined />}
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="w-full"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Spacer height={gap} />
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            icon={<LoginOutlined />}
            loading={loading}
          >
            Sign In
          </Button>
          <Button type="link" loading={loading} href="/forgot-password">
            Forgot Password
          </Button>
          <Spacer height={gap} />
          <Typography.Text>Or</Typography.Text>
          <Button
            type="default"
            block
            size="large"
            icon={<GoogleOutlined />}
            loading={loading}
          >
            Sign In with Google
          </Button>
          <Spacer height={gap} />
          <Typography.Text>
            New to Snap? <Link href="/sign-up">Sign Up</Link>
          </Typography.Text>
        </Form>
      </div>
    </div>
  );
};

export default Page;
