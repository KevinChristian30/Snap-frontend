"use client";

import ResponseDTO from "@/dto/Response.dto";
import CurrentUserResponseDTO from "@/dto/response/CurrentUserResponse.dto";
import AuthenticationService from "@/service/AuthenticationService";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import Loading from "../common/Loading";

interface IIsAuthenticatedProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

const IsAuthenticated = (props: IIsAuthenticatedProps) => {
  const { children } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ResponseDTO<CurrentUserResponseDTO | null, string[]>>();
  const router = useRouter();

  const validateToken = async () => {
    setLoading(true);
    const response: ResponseDTO<CurrentUserResponseDTO | null, string[]> =
      await AuthenticationService.getCurrentUser();
    setLoading(false);

    if (!response.successful) {
      router.push("/sign-in");
    }

    setResponse(response);
  };

  useEffect(() => {
    validateToken();
  }, []);

  return <>{loading || !(response?.successful) ? <Loading /> : <div {...props}>{children}</div>}</>;
};

export default IsAuthenticated;
