import ResponseDTO from "@/dto/Response.dto";
import SignInRequestDTO from "@/dto/request/SignInRequest.dto";
import SignUpRequestDTO from "@/dto/request/SignUpRequest.dto";
import SignInResponseDTO from "@/dto/response/SignInResponse.dto";
import axios from "axios";

export default class AuthenticationService {
  static async signIn(dto: SignInRequestDTO): Promise<ResponseDTO<SignInResponseDTO | null, string[]>> {
    const url = "http://localhost:8080/auth/sign-in";

    let response: ResponseDTO<SignInResponseDTO | null, string[]> = new ResponseDTO(false, null, []);
    try {
      const data = await axios.post(url, dto);
      response.successPayload = new SignInResponseDTO(data.data.token);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response.data.message ? error.response.data.message : [];
      response.successful = false;
    }

    return response;
  }

  static async signUp(dto: SignUpRequestDTO): Promise<ResponseDTO<null, string[]>> {
    const url = "http://localhost:8080/auth/sign-up";

    let response: ResponseDTO<null, string[]> = new ResponseDTO(false, null, []);
    try {
      response.successPayload = await axios.post(url, dto);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response.data.errors ? error.response.data.errors : [];
      response.successful = false;
    }

    return response;
  }
}