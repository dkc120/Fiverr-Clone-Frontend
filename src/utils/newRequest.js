import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://tan-lucky-grasshopper.cyclic.app/api",
  withCredentials: true,
});

export default newRequest;
