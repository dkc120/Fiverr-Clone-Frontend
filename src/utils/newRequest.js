import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrapi.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
