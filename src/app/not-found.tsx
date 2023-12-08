"use client";

import { HomeOutlined } from "@ant-design/icons";
import { Button, Empty } from "antd";
import Link from "next/link";
import React from "react";
import "./globals.css";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Empty
        image="/not-found.svg"
        imageStyle={{ height: 160 }}
        description={
          <p>
            Oops... looks like you got lost. Get back home by clicking the
            buttom below.
          </p>
        }
      >
        <Link href="/">
          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<HomeOutlined />}
          >
            Go Home
          </Button>
        </Link>
      </Empty>
    </div>
  );
};

export default NotFoundPage;
