import instance from "@/utils/request";
import type { PostData } from "./requestType";

interface LoginForm {
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  avatar: string;
  email: string;
  nickname: string;
  school: string;
  status: boolean;
  isAdmin: boolean;
}

interface LoginResponse {
  token: string;
  user: User;
}

interface RegisterForm {
  username: string;
  password: string;
  nickname: string;
  school: string;
}

const login: PostData<LoginForm, LoginResponse> = (data) => {
  return instance.post("/auth/login", data);
};

const register = (data: RegisterForm) => instance.post("/users", data);

export { login, register };
