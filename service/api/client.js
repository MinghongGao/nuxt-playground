const { default: axios } = require("axios");

const baseURL = "https://jsonplaceholder.typicode.com"

export default {
  get(api, params) {
    return axios.get(`${baseURL}${api}`, params).then(res => res.data)
  },
  post(api, data) {
    return axios.post(`${baseURL}${api}`, { data }).then(res => res.data)
  },
  put(api, data) {
    return axios.put(`${baseURL}${api}`, { data }).then(res => res.data)
  },
  delete(api) {
    return axios.delete(`${baseURL}${api}`).then(res => res.data)
  }
}