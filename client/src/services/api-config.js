import axios from "axios";

const baseUrl = "https://rails-ninja.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
