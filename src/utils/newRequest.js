import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrapi.vercel.app/",
  withCredentials: true,
});

export default newRequest;
