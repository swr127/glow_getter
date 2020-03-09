import axios from 'axios';

const apiUrl = 'http://localhost:3000'

const api = axios.create({
  apiUrl: apiUrl
})

export const getUsers = async () => {
    const response = await api.get('/users')
    return response.data
}

export const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`)
    return response.data
}

export const getProducts = async () => {
    const response = await api.get('/products')
    return response.data
}

export const getProductsById = async (id) => {
    const response = await api.get('/products')
    return response.data
}

export const loginUser = async (loginData) => {
  const response = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const registerUser = async (registerData) => {
  const response = await api.post('/users', { user: registerData })
  localStorage.setItem('authToken', response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.get('/auth/verify');
    return response.data
  }
  return false
}

