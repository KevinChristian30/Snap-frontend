import URL from "@/constants/url";
import ResponseDTO from "@/dto/Response.dto";
import EmailConfirmationCodeVerificationRequestDTO from "@/dto/request/EmailConfirmationCodeVerificationRequest.dto";
import SignInRequestDTO from "@/dto/request/SignInRequest.dto";
import SignUpRequestDTO from "@/dto/request/SignUpRequest.dto";
import CurrentUserResponseDTO from "@/dto/response/CurrentUserResponse.dto";
import SignInResponseDTO from "@/dto/response/SignInResponse.dto";
import axios from "axios";

export default class AuthenticationService {
  static async signIn(dto: SignInRequestDTO): Promise<ResponseDTO<SignInResponseDTO | null, string[]>> {
    const url = URL.baseURL + '/auth/sign-in';

    let response: ResponseDTO<SignInResponseDTO | null, string[]> = new ResponseDTO(false, null, []);
    try {
      const data = await axios.post(url, dto);
      response.successPayload = new SignInResponseDTO(data.data.token);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response && error.response.data && error.response.data.message ? error.response.data.message : ["Something went wrong"];
      response.successful = false;
    }

    return response;
  }

  static async signUp(dto: SignUpRequestDTO): Promise<ResponseDTO<null, string[]>> {
    const url = URL.baseURL + '/auth/sign-up';

    let response: ResponseDTO<null, string[]> = new ResponseDTO(false, null, []);
    try {
      response.successPayload = await axios.post(url, dto);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response && error.response.data && error.response.data.errors ? error.response.data.errors : ["Something went wrong"];
      response.successful = false;
    }

    return response;
  }

  static async getCurrentUser(): Promise<ResponseDTO<CurrentUserResponseDTO | null, string[]>> {
    const url = URL.baseURL + '/v1/auth/me';

    let response: ResponseDTO<CurrentUserResponseDTO | null, string[]> = new ResponseDTO(false, null, []);
    try {
      const axiosResponse = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      response.successPayload = axiosResponse.data;
      response.successful = true;
    } catch (error: any) {
      response.successful = false;
    }

    return response;
  }

  static async requestCode(): Promise<ResponseDTO<null, null>> {
    const url = URL.baseURL + '/v1/auth/confirm-email';

    let response: ResponseDTO<null, null> = new ResponseDTO(false, null, null);
    try {
      const axiosResponse = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      response.successful = true;
    } catch (error: any) {
      response.successful = false;
    }

    return response;
  }

  static async confirmEmail(dto: EmailConfirmationCodeVerificationRequestDTO): Promise<ResponseDTO<null, string[]>> {
    const url = URL.baseURL + '/v1/auth/confirm-email';

    let response: ResponseDTO<null, string[]> = new ResponseDTO(false, null, []);
    try {
      const axiosResponse = await axios.post(url, dto, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response && error.response.data && error.response.data.errors ? error.response.data.errors : ["Something went wrong"];
      response.successful = false;
    }

    return response;
  }
}