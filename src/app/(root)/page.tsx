"use client";

import { localStorageKeys } from "@/constants";
import ResponseDTO from "@/dto/Response.dto";
import CheckoutRequestDTO from "@/dto/request/CheckoutRequestDTO";
import CheckoutResponseDTO from "@/dto/response/CheckoutResponseDTO";
import PaymentService from "@/service/PaymentService";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const checkout = async () => {
    const paymentService: PaymentService = new PaymentService(localStorage.getItem(localStorageKeys.token));
    const dto: CheckoutRequestDTO = new CheckoutRequestDTO(100000);

    setLoading(true);
    const response: ResponseDTO<CheckoutResponseDTO | null, string[]> =
      await paymentService.checkout(dto);
    setLoading(false);

    router.push(response.successPayload?.redirectURL || "");
  };

  return (
    <div className="flex h-full items-center justify-center">
      <Button type="primary" onClick={checkout} loading={loading}>
        Checkout
      </Button>
    </div>
  );
}
