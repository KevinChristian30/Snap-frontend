"use client";

import Loading from "@/components/common/Loading";
import { localStorageKeys } from "@/constants";
import { signOut } from "@/redux/features/auth-slice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem(localStorageKeys.token);
    dispatch(signOut());
    router.push("/sign-in");
  }, []);

  return <Loading />;
};

export default Page;
