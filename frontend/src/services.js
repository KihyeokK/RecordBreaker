import axios from "axios";

// URL to which requests will be sent
const API_URL = "http://localhost:8080/api";

export const getFriendPosts = async (userName) => {
  try {
    console.log("getFriendPosts", userName);
    const response = await axios.get(
      `${API_URL}/users/${userName}/friends/posts`
      );
    console.log(
      response.data
    );
    return response.data;
  } catch (e) {
    console.log(e);
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
      if (e.response.status === 400) {
        alert("You have already posted today!");
      }
      else {
        console.log(e);
        throw new Error("Error in response");
      }
    }
  };

export const getUserGroups = async (userName) => {
    try {
      const response = await axios.get(
        `${API_URL}/users/${userName}/groups`,
        {
          userName: userName,
        },
      );
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error("Error in response");
    }
  }

export const getGroupPosts = async (groupId) => {
    try {
      const response = await axios.get(`${API_URL}/groups/${groupId}/posts`);
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error("Error in response");
    }
  }

export const getGroup = async (groupId) => {
    try {
      const response = await axios.get(
        `${API_URL}/groups/${groupId}`,
        {
          groupId: groupId,
        },
        );
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error("Error in response");
    }
  }

export const getSong = async (songId) => {
    try {
      console.log("getSong", songId);
      const response = await axios.get(
        `${API_URL}/song/${songId}`
        );
      console.log("songinfo", response);
      return response.data.song;
    } catch (e) {
      console.log(e);
      throw new Error("Error in response");
    }
  }

