"use client";

import Spacer from "@/components/utils/Spacer";
import { GoogleOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React from "react";

const gap = 24;

const page = () => {
  const [form] = Form.useForm();

  return (
    <div className="h-full flex items-center justify-center circles">
      <div className="w-[400px] p-8 bg-white rounded-xl shadow-lg">
        <Typography.Title>Snap</Typography.Title>
        <Spacer height={gap} />
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col items-center"
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
