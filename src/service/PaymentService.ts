import CheckoutRequestDTO from "@/dto/request/CheckoutRequestDTO";
import BaseService from "./BaseService";
import ResponseDTO from "@/dto/Response.dto";
import CheckoutResponseDTO from "@/dto/response/CheckoutResponseDTO";

export default class PaymentService extends BaseService {
  async checkout(dto: CheckoutRequestDTO): Promise<ResponseDTO<CheckoutResponseDTO | null, string[]>> {
    let response: ResponseDTO<CheckoutResponseDTO | null, string[]> = new ResponseDTO(false, null, []);
    try {
      const data = await this._axios.get("/v1/checkout");
      response.successPayload = new CheckoutResponseDTO(data.data.token, data.data.redirectURL);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response && error.response.data && error.response.data.message ? error.response.data.message : ["Something went wrong"];
      response.successful = false;
    }

    return response;
  }
}