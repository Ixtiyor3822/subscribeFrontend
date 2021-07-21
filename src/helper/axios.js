import axios from "axios";

export const storageName = "UserData";
// const uri = "http://localhost:5000/";
const uri = "https://registeruchunbackend.herokuapp.com/";
const headers = {
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
};

const fetch_axios = axios.create({
  baseURL: uri,
  headers,
});

fetch_axios.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetch_axios;
