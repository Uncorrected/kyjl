import instance from "@/utils/request";
import { useUserStore } from "@/stores/index";

interface updateForm {
  avatar?: string;
  username?: string;
  nickname?: string;
  school?: string;
}

interface RegisterForm {
  username: string;
  password: string;
  nickname?: string;
  school?: string;
}

const userStore = useUserStore();

const register = (data: RegisterForm) => instance.post("/users/register", data);
const updateUser = (data: updateForm) =>
  instance.patch(`/users/${userStore.user.id}`, data);

const alterPassword = (password: string) =>
  instance.put(`/users/${userStore.user.id}/password`, { password });
export { updateUser, register, alterPassword };
