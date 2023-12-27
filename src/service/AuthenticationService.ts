import ResponseDTO from "@/dto/Response.dto";
import EmailConfirmationCodeVerificationRequestDTO from "@/dto/request/EmailConfirmationCodeVerificationRequest.dto";
import SignInRequestDTO from "@/dto/request/SignInRequest.dto";
import SignUpRequestDTO from "@/dto/request/SignUpRequest.dto";
import CurrentUserResponseDTO from "@/dto/response/CurrentUserResponse.dto";
import SignInResponseDTO from "@/dto/response/SignInResponse.dto";
import BaseService from "./BaseService";

export default class AuthenticationService extends BaseService {
  async signIn(dto: SignInRequestDTO): Promise<ResponseDTO<SignInResponseDTO | null, string[]>> {
    let response: ResponseDTO<SignInResponseDTO | null, string[]> = new ResponseDTO(false, null, []);
    try {
      const data = await this._axios.post("/auth/sign-in", dto);
      response.successPayload = new SignInResponseDTO(data.data.token);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response && error.response.data && error.response.data.message ? error.response.data.message : ["Something went wrong"];
      response.successful = false;
    }

    return response;
  }

  async signUp(dto: SignUpRequestDTO): Promise<ResponseDTO<null, string[]>> {
    let response: ResponseDTO<null, string[]> = new ResponseDTO(false, null, []);
    try {
      response.successPayload = await this._axios.post('/auth/sign-up', dto);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response && error.response.data && error.response.data.errors ? error.response.data.errors : ["Something went wrong"];
      response.successful = false;
    }

    return response;
  }

  async getCurrentUser(): Promise<ResponseDTO<CurrentUserResponseDTO | null, string[]>> {
    let response: ResponseDTO<CurrentUserResponseDTO | null, string[]> = new ResponseDTO(false, null, []);
    try {
      const axiosResponse = await this._axios.get('/v1/auth/me');

      response.successPayload = axiosResponse.data;
      response.successful = true;
    } catch (error: any) {
      response.successful = false;
    }

    return response;
  }

  async requestCode(): Promise<ResponseDTO<null, string[]>> {
    let response: ResponseDTO<null, string[]> = new ResponseDTO(false, null, []);
    try {
      const axiosResponse = await this._axios.get('/v1/auth/confirm-email');
      response.successful = true;
    } catch (error: any) {
      response.successful = false;
      response.failurePayload = response.failurePayload = error.response && error.response.data && error.response.data.errors ? error.response.data.errors : ["Something went wrong"];
    }

    return response;
  }

  async confirmEmail(dto: EmailConfirmationCodeVerificationRequestDTO): Promise<ResponseDTO<null, string[]>> {
    let response: ResponseDTO<null, string[]> = new ResponseDTO(false, null, []);
    try {
      const axiosResponse = await this._axios.post('/v1/auth/confirm-email', dto);
      response.successful = true;
    } catch (error: any) {
      response.failurePayload = error.response && error.response.data && error.response.data.errors ? error.response.data.errors : ["Something went wrong"];
      response.successful = false;
    }

    return response;
  }
}