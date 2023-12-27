"use client";

import Icons from "@/components/Icons";
import Spacer from "@/components/utils/Spacer";
import { useAppSelector } from "@/redux/store";
import { NumberOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signOut as signOutReducer } from "@/redux/features/auth-slice";
import { useRouter } from "next/navigation";
import AuthenticationService from "@/service/AuthenticationService";
import ResponseDTO from "@/dto/Response.dto";
import EmailConfirmationCodeVerificationRequestDTO from "@/dto/request/EmailConfirmationCodeVerificationRequest.dto";
import { localStorageKeys } from "@/constants";

const gap = 24;
const requestCodeDelay = 120;

const Page = () => {
  const [delay, setDelay] = useState<number>(requestCodeDelay);
  const currentUser = useAppSelector((state) => state.authSlice.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();

  const requestCode = async () => {
    const authenticationService: AuthenticationService =
      new AuthenticationService(localStorage.getItem(localStorageKeys.token));

    const response: ResponseDTO<null, string[]> =
      await authenticationService.requestCode();

    if (!response.successful) {
      api.error({
        message: `Couldn't Send Email`,
        description: response.failurePayload[0] ? response.failurePayload[0] : "Somewhing went wrong",
        placement: "top",
      });
    } else {
      api.success({
        message: `Email sent`,
        description:
          "Check your email for the code we sent you, it might be in spam.",
        placement: "top",
      });
    }
  };

  useEffect(() => {
    requestCode();

    const interval = setInterval(() => {
      setDelay((delay) => delay - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const resendCode = () => {
    requestCode();
    setDelay(requestCodeDelay);
  };

  const signOut = () => {
    dispatch(signOutReducer());
    localStorage.removeItem(localStorageKeys.token);
    router.push("/sign-in");
  };

  const submitCode = async (code: string) => {
    const authenticationService: AuthenticationService =
      new AuthenticationService(localStorage.getItem(localStorageKeys.token));

    const response: ResponseDTO<null, string[]> =
      await authenticationService.confirmEmail(
        new EmailConfirmationCodeVerificationRequestDTO(code),
      );

    if (!response.successful) {
      api.error({
        message: "Something went wrong",
        description: response.failurePayload[0]
          ? response.failurePayload[0]
          : "Please try again.",
        placement: "top",
      });
    } else {
      localStorage.removeItem(localStorageKeys.token);

      api.success({
        message: "Email verified",
        description: "Hang on tight, please sign in again.",
        placement: "top",
        duration: 2,
        onClose: () => {
          router.push("/");
        },
      });
    }
  };

  return (
    <div className="bg-wavy flex min-h-screen w-full items-center justify-center">
      {contextHolder}
      <div className="m-4 flex w-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
        <Icons.logo className="h-8 w-8" />
        <Spacer height={gap} />
        <Typography.Text>
          Please enter the code we sent to your email at
          <span className="font-bold underline"> {currentUser.email}</span>.
        </Typography.Text>
        <Spacer height={gap} />
        <Form
          layout="vertical"
          className="flex w-full flex-col items-center"
          onFinish={(values) => submitCode(values.code)}
        >
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
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            icon={<SendOutlined />}
          >
            Submit Code
          </Button>
          <Button type="link" loading={delay > 0} onClick={resendCode}>
            Resend Code {delay > 0 && `(${delay}s)`}
          </Button>
          <Spacer height={gap} />
          <Button type="default" block onClick={signOut}>
            Sign Out
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Page;
