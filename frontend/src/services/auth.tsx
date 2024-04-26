import axios from "../lib/axios";

import { LoginType, SignupType } from "@/lib/types";

export const signup = async (data: SignupType) => {
  return axios.post("/auth/signup", data);
};

export const login = async (data: LoginType) => {
  return axios.post("/auth/login", data);
};

export const logout = () => {
  delete axios.defaults.headers["Authorization"];
};
