import axios from "../lib/axios";

export const getUser = async () => {
  try {
    const res = await axios.get("/users/me");
    return res.data;
  } catch (error) {
    throw error;
  }
};
