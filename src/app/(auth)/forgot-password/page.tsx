"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import { LockOutlined, MailOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Steps, Typography } from "antd";
import React, { useState } from "react";

const gap = 24;

const steps= [
  {
    title: "Email",
    icon: <MailOutlined />,
  },
  {
    title: "Code",
    icon: <StarOutlined />,
  },
  {
    title: "New Password",
    icon: <LockOutlined />,
  },
];

const Page = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    marginTop: 16,
  };

  return (
    <div className="bg-squares flex min-h-screen w-full items-center justify-center">
      <div className="m-4 flex w-[800px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Typography.Text>
          Don't worry, enter your email address, and we'll guide you to reset
          your password.
        </Typography.Text>
        <Spacer height={gap} />
        {/* <Form layout="vertical" className="flex w-full flex-col items-center">
          <Form.Item
            name="email"
            label="Email"
            className="w-full"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input
              placeholder="Email"
              size="large"
              prefix={<MailOutlined />}
            />
          </Form.Item>
        </Form> */}
        <Steps
          items={[
            {
              title: "Email",
              status: "finish",
              icon: <MailOutlined />,
            },
            {
              title: "Code",
              status: "finish",
              icon: <StarOutlined />,
            },
            {
              title: "New Password",
              status: "process",
              icon: <LockOutlined />,
            },
          ]}
        />
         <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary">
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      </div>
    </div>
  );
};

export default Page;
