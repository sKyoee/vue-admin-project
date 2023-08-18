import http from "@/utils/request.ts";
import type { loginResponse, loginData, getInfoResponse } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
const reqLogin = ({ username, password }: loginData) => {
  return http.post<any, loginResponse>(API.LOGIN_URL, { username, password });
};

const getUserInfo = () => {
  return http.get<any, getInfoResponse>(API.USERINFO_URL);
};

export { reqLogin, getUserInfo };
