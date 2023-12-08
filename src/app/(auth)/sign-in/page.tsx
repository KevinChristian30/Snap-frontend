"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import AuthenticationRequestDTO from "@/dto/AuthenticationRequest.dto";
import AuthenticationService from "@/service/AuthenticationService";
import { GoogleOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const gap = 24;

const Page = () => {
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const openLoginFailedNotification = () => {
    api.error({
      message: `Login Failed`,
      description: "Invalid email or password, please try again.",
      placement: "top",
    });
  };

  const openLoginSuccessfulNotification = () => {
    api.success({
      message: `Login Successful`,
      description: "Hang on tight, we're redirecting you.",
      placement: "top",
    });
  };

  const login = async (email: string, password: string) => {
    const dto: AuthenticationRequestDTO = new AuthenticationRequestDTO(
      email,
      password,
    );

    // setLoading(true);
    // const response = await AuthenticationService.login(dto);
    // setLoading(false);

    // if (response === null) {
    //   openLoginFailedNotification();
    // } else {
    //   openLoginSuccessfulNotification();
    //   router.push("/");
    // }
  };

  return (
    <div className="bg-diagonal-lines flex h-full items-center justify-center">
      {contextHolder}
      <div className="mx-4 flex w-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Form
          layout="vertical"
          className="flex w-full flex-col items-center"
          onFinish={(values) => login(values.email, values.password)}
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
              disabled={loading}
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
              disabled={loading}
            />
          </Form.Item>
          <Spacer height={gap} />
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={loading}
          >
            Sign In
          </Button>
          <Button type="link" disabled={loading}>
            Forgot Password
          </Button>
          <Spacer height={gap} />
          <Typography.Text>Or</Typography.Text>
          <Button
            type="default"
            block
            size="large"
            icon={<GoogleOutlined />}
            disabled={loading}
          >
            Login with Google
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
