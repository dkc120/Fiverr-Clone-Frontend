import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrapi-4ja6.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
