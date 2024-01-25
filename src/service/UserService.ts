import ResponseDTO from "@/dto/Response.dto";
import BaseService from "./BaseService";
import UserDetailsResponseDTO from "@/dto/response/UserDetailsResponse.dto";

export default class UserService extends BaseService {
  async getCurrentUserDetails(): Promise<
    ResponseDTO<UserDetailsResponseDTO | null, null>
  > {
    const response = new ResponseDTO<UserDetailsResponseDTO | null, null>(
      false,
      null,
      null,
    );

    try {
      const data = await this._axios.get("/v1/users/me");
      response.successPayload = new UserDetailsResponseDTO(
        data.data.id,
        data.data.email,
        data.data.first_name,
        data.data.last_name,
        data.data.username,
        data.data.bio
      );
      response.successful = true;
    } catch (error) {
      response.successful = false;
    }

    return response;
  }
}
