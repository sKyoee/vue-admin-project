export interface BasicResponse {
  code: number;
}
export interface loginData {
  username: string;
  password: string;
}
export interface loginResponse extends BasicResponse {
  data: {
    token: string;
  };
}

export interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
export interface getInfoResponse extends BasicResponse {
  data: {
    checkUser: userInfo;
  };
}
