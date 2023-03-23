import instance from "@/utils/request";
import type { PostData } from "./requestType";
import type { userType } from "@/stores/user";
const config = {
  timeout: 0,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const uploadImage: PostData<FormData, userType> = (files) => {
  return instance.post("/upload/image", files, config);
};

export { uploadImage };
