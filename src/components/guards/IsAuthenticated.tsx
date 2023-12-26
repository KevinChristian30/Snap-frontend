"use client";

import ResponseDTO from "@/dto/Response.dto";
import CurrentUserResponseDTO from "@/dto/response/CurrentUserResponse.dto";
import AuthenticationService from "@/service/AuthenticationService";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import Loading from "../common/Loading";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/features/auth-slice";

interface IIsAuthenticatedConfig {
  emailMustBeVerified: boolean;
};

interface IIsAuthenticatedProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
  config: IIsAuthenticatedConfig;
}

const IsAuthenticated = (props: IIsAuthenticatedProps) => {
  const { children, config } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] =
    useState<ResponseDTO<CurrentUserResponseDTO | null, string[]>>();
  const router = useRouter();
  const dispatch = useDispatch<any>(); //! AppDispatch

  const validateToken = async () => {
    setLoading(true);
    const response: ResponseDTO<CurrentUserResponseDTO | null, string[]> =
      await AuthenticationService.getCurrentUser();
    setLoading(false);

    if (!response.successful) {
      router.push("/sign-in");
      return;
    } 

    if (response.successPayload) {
      dispatch(signIn(response.successPayload));
    }

    if (config.emailMustBeVerified && !response.successPayload?.is_email_verified) {
      router.push("/confirm-email");
    }

    setResponse(response);
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <>
      {loading ||
      !response?.successful ||
      (config.emailMustBeVerified && !response.successPayload?.is_email_verified) ? (
        <Loading />
      ) : (
        <div {...props}>{children}</div>
      )}
    </>
  );
};

export default IsAuthenticated;
