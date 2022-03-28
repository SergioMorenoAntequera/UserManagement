

const baseURL = "http://localhost:8081"

const instance = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});