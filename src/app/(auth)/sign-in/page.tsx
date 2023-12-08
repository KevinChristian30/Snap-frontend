"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import { GoogleOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React from "react";

const gap = 24;

const page = () => {
  const [form] = Form.useForm();

  return (
    <div className="bg-diagonal-lines flex h-full items-center justify-center">
      <div className="mx-4 flex w-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col items-center w-full"
        >
          <Form.Item label="Email" className="w-full">
            <Input
              placeholder="Email"
              size="large"
              prefix={<MailOutlined />}
              type="email"
            />
          </Form.Item>
          <Form.Item label="Password" className="w-full">
            <Input.Password
              placeholder="Password"
              size="large"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Login
          </Button>
          <Button type="link">Forgot Password</Button>
          <Spacer height={gap} />
          <Typography.Text>Or</Typography.Text>
          <Button type="default" block size="large" icon={<GoogleOutlined />}>
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default page;
