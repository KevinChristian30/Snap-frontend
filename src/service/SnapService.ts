import SnapCreateRequestDTO from "@/dto/request/SnapCreateRequest.dto";
import BaseService from "./BaseService";
import ResponseDTO from "@/dto/Response.dto";

export default class SnapService extends BaseService {
  async createSnap(
    dto: SnapCreateRequestDTO,
  ): Promise<ResponseDTO<null, string[]>> {
    let response: ResponseDTO<null, string[]> = new ResponseDTO<null, string[]>(
      false,
      null,
      [],
    );

    try {
      await this._axios.post("/v1/snaps", dto);
      response.successful = true;
    } catch (error: any) {
      response.successful = false;
      response.failurePayload =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : ["Something went wrong"];
    }

    return response;
  }
}
