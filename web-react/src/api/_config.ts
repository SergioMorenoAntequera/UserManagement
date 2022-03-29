
import axios from "axios"

const baseURL = "http://localhost:8082"

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance