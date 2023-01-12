import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProducts() {
    return apiClient.get('/products')
  },
  getProduct(id) {
    return apiClient.get('/products/' + id)
  }
}