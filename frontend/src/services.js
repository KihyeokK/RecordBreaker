import axios from "axios";

// URL to which requests will be sent
const API_URL = "http://localhost:8080/api";

export const get = async () => {
  try {
    // Uses axios to make a get request at "http://localhost:3001/api/tasks"
    const response = await axios.get(`${API_URL}/tasks`);
    console.log(
      "inside getAllTasks helper function: fetching all tasks",
      response.data.tasks
    );
    return response.data.tasks;
  } catch (e) {
    alert("Error in Axios get query to /tasks. Could not get all tasks.");
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