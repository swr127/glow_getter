// import axios from 'axios';

let apiUrl 
const apiUrls = {
    production: '',
    development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl

// export const getUsers = async () => {
//     const response = await apiUrl.get('/users')
//     return response.data
// }

// export const getUserById = async (id) => {
//     const response = await apiUrl.get(`/users/${id}`)
//     return response.data
// }

// export const getProducts = async () => {
//     const response = await apiUrl.get('/products')
//     return response.data
// }

// export const getProductsById = async (id) => {
//     const response = await apiUrl.get(`/products/${id}`)
//     return response.data
// }

export const loginUser = async (loginData) => {
  const response = await apiUrl.post('/auth/login', loginData)
  localStorage.setItem('authToken', response.data.token);
  apiUrl.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const registerUser = async (registerData) => {
  const response = await apiUrl.post('/users', { user: registerData })
  localStorage.setItem('authToken', response.data.token);
  apiUrl.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    apiUrl.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await apiUrl.get('/auth/verify');
    return response.data
  }
  return false
}