import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "https://localhost:44389/api";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/Vehicle");
};

const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/Customer", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;
