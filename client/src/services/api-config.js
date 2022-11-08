import axios from "axios";

const baseUrl = "https://rails-ninja-db.fly.dev/"
// "https://rails-ninja.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
});
 
export default api;
