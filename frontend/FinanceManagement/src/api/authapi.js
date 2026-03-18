import axios from "axios";

const BASE_URL = "https://finance-management-system-le1z.onrender.com/api/auth";

export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, credentials);
    return res;
  } catch (error) {
    return { data: null, error };
  }
};

export const registerUser = async (payload) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, payload);
    return res;
  } catch (error) {
    return { data: null, error };
  }
};

export default { loginUser, registerUser };
