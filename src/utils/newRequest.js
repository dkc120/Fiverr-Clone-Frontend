import axios from "axios";

const newRequest = axios.create({
  baseURL:
    "http://fiverrapi-env.eba-mrgqpeik.ap-south-1.elasticbeanstalk.com/api",
  withCredentials: true,
});

export default newRequest;
