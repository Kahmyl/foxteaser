import axios from "axios";

const BASE_URL = "https://the-trivia-api.com/api";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;