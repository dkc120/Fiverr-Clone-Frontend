import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrapi-3909.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
