"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import { useAppSelector } from "@/redux/store";
import { NumberOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";

const gap = 24;

const Page = () => {
  const [delay, setDelay] = useState<number>(60);
  const currentUser = useAppSelector((state) => state.authSlice.value);

  useEffect(() => {
    const interval = setInterval(() => {
      setDelay((delay) => delay - 1);
    }, 1000);

    console.log(currentUser);

    return () => clearInterval(interval);
  }, []);

  const resendCode = () => {
    setDelay(60);
  }

  return (
    <div className="bg-wavy flex min-h-screen w-full items-center justify-center">
      <div className="m-4 flex w-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Typography.Text>
          Please enter the code we sent to your email at
          <span className="font-bold underline"> {currentUser.email}</span>.
        </Typography.Text>
        <Spacer height={gap} />
        <Form layout="vertical" className="flex w-full flex-col items-center">
          <Form.Item
            name="code"
            label="Code"
            className="w-full"
            rules={[{ required: true, message: "Code is required" }]}
          >
            <Input
              placeholder="Code"
              size="large"
              prefix={<NumberOutlined />}
              type="email"
            />
          </Form.Item>
          <Spacer height={gap} />
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            icon={<SendOutlined />}
          >
            Send Code
          </Button>
          <Button type="link" loading={delay > 0} onClick={resendCode}>
            Resend Code {delay > 0 && `(${delay}s)`}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Page;
