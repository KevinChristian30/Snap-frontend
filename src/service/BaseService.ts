import URL from "@/constants/url";
import axios, { AxiosInstance } from "axios";

export default abstract class BaseService {
  protected _axios: AxiosInstance;
  protected _token!: string;
  constructor(token?: string | null) {
    let headers = {};
    if (token) {
      this._token = token;
      headers = { ...headers, 'Authorization': `Bearer ${token}` }
    }

    this._axios = axios.create({
      baseURL: URL.baseURL,
      timeout: 10000,
      headers: headers
    });
  }
}