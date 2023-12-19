"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import ResponseDTO from "@/dto/Response.dto";
import SignUpRequestDTO from "@/dto/request/SignUpRequest.dto";
import AuthenticationService from "@/service/AuthenticationService";
import { KeyOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const gap = 24;

const Page = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const openSignUpFailedErrorNotifications = (errors: string[]) => {
    errors.forEach((error) => {
      api.error({
        message: `Something went wrong`,
        description: error,
        placement: "top",
      });
    });
  };

  const openSignUpSuccessNotification = () => {
    api.success({
      message: `Account created`,
      description: "Hang on, we're redirecting you",
      placement: "top",
      onClose: () => router.push("/sign-in"),
      duration: 1,
    });
  };

  const signUp = async (dto: SignUpRequestDTO) => {
    setLoading(true);
    const response: ResponseDTO<null, string[]> =
      await AuthenticationService.signUp(dto);
    setLoading(false);

    if (response.successful) {
      openSignUpSuccessNotification();
    } else {
      openSignUpFailedErrorNotifications(response.failurePayload);
    }
  };

  return (
    <div className="bg-lines-reversed flex min-h-screen items-center justify-center">
      {contextHolder}
      <div className="m-4 flex w-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Form
          layout="vertical"
          className="flex w-full flex-col items-center"
          disabled={loading}
          onFinish={(values) => {
            signUp(
              new SignUpRequestDTO(
                values.email,
                values.firstName,
                values.password,
                values.confirmPassword,
              ),
            );
          }}
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
            name="firstName"
            label="First Name"
            className="w-full"
            rules={[{ required: true, message: "First name is required" }]}
          >
            <Input
              placeholder="First Name"
              size="large"
              prefix={<UserOutlined />}
              type="text"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="w-full"
            rules={[
              { required: true, message: "Password is required" },
              ({}) => ({
                validator(_, value) {
                  if (!value) return Promise.resolve();

                  if (value.length < 8)
                    return Promise.reject(
                      new Error("Password must be at least 8 characters long"),
                    );

                  return value.match(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{1,}$/,
                  )
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Password must contain 1 uppercase letter, 1 lowercase letter, and 1 number",
                        ),
                      );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            className="w-full"
            rules={[
              { required: true, message: "Password Confirmation is required" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Passwords doesn't match"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
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
            loading={loading}
          >
            Sign Up
          </Button>
          <Spacer height={gap} />
          <Typography.Text>
            Already Have an Account? <Link href="/sign-in">Sign In</Link>
          </Typography.Text>
        </Form>
      </div>
    </div>
  );
};

export default Page;
