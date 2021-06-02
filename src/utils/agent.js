import axios from "axios"

const agent = axios.create({
  baseURL: "/api/v1",
})

function request({ method, url, data }) {
  return agent({
    method,
    url,
    data,
  })
}
export default request
