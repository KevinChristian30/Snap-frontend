import URL from "@/constants/url";
import axios, { AxiosInstance } from "axios";

export default abstract class BaseService {
  protected _axios: AxiosInstance;
  constructor(token?: string | null) {
    let headers = {};
    if (token) {
      headers = { ...headers, 'Authorization': `Bearer ${token}` }
    }

    this._axios = axios.create({
      baseURL: URL.baseURL,
      timeout: 10000,
      headers: headers
    });
  }
}