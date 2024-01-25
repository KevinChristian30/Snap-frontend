import MediaFileRequestDTO from "@/dto/request/MediaFileRequest.dto";
import BaseService from "./BaseService";
import ResponseDTO from "@/dto/Response.dto";
import MediaFileResponseDTO from "@/dto/response/MediaFileResponse.dto";
import axios from "axios";
import URL from "@/constants/url";

export default class MediaFileService extends BaseService {
  async upload(dto: MediaFileRequestDTO): Promise<ResponseDTO<MediaFileResponseDTO | null, string[]>> {
    let response: ResponseDTO<MediaFileResponseDTO | null, string[]> = new ResponseDTO(false, null, []);

    try {
      const data = await axios.post(URL.baseURL + '/v1/media-file', dto.mediaFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this._token
        }
      });

      response.successPayload = new MediaFileResponseDTO(data.data.id, data.data.file_name, data.data.file_type, data.data.file_url);
      response.successful = true;
    } catch (error: any) {
      response.successful = false;
    }

    return response;
  }
}