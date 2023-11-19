import axios from "axios";

// URL to which requests will be sent
const API_URL = "http://localhost:8080/api";

export const getFriendPosts = async (userName) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userName}/friends/posts`);
    console.log(
      response.data.posts
    );
    return response.data.posts;
  } catch (e) {
    alert("Error in Axios get query to /${API_URL}/users/${userName}/friends/posts. Could not get all posts from friends.");
  }
};

export const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${API_URL}/login/`,
        credentials
      );
      return response.data;
    } catch (e) {
      throw new Error("Error in response");
    }
  };

export const createPost = async (search) => {
    try{
      const response = await axios.post(
        `${API_URL}/posts/`,
        search
      );
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error("Error in response");
    }
  };
