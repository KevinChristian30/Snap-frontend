"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import { KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import Link from "next/link";
import React from "react";

const gap = 24;

const Page = () => {
  return (
    <div className="bg-lines-reversed flex h-full items-center justify-center">
      <div className="mx-4 flex w-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Form layout="vertical" className="flex w-full flex-col items-center">
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
            rules={[
              { required: true, message: "Password is required" }
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
