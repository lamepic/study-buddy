import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (request) {
    const access_token = Cookies.get("access_token");
    if (access_token) {
      request.headers.Authorization = `Bearer ${access_token}`;
    }
    return request;
  },
  function (error) {
    // console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
