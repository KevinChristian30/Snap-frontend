import ResponseDTO from "@/dto/Response.dto";
import SignInRequestDTO from "@/dto/SignInRequest.dto";
import SignUpRequestDTO from "@/dto/SignUpRequest.dto";
import axios, { AxiosError } from "axios";

export default class AuthenticationService {
  static async signIn(dto: SignInRequestDTO) { }

  static async signUp(dto: SignUpRequestDTO): Promise<ResponseDTO<null, string[]>> {
    const url = "http://localhost:8080/auth/sign-up";

    let response: ResponseDTO<null, string[]> = new ResponseDTO(false, null, []);
    try {
      response.successPayload = await axios.post(url, dto);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response.data.errors;
      response.successful = false;
    }

    return response;
  }
}