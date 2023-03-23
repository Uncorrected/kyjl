import { defineStore } from "pinia";

export interface userType {
  id: number;
  username: string;
  avatar: string;
  email: string;
  nickname: string;
  school: string;
  status: boolean;
  isAdmin: boolean;
}

export default defineStore(
  "user",
  () => {
    const token = ref<string>("");
    const user = ref<userType>({
      id: 0,
      username: "",
      avatar: "",
      email: "",
      nickname: "",
      school: "",
      status: false,
      isAdmin: false,
    });
    return {
      token,
      user,
    };
  },
  {
    persist: true,
  }
);
