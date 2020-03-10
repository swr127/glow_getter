import axios from 'axios';

const baseUrl = 'http://localhost:3000'
let api;

if (localStorage.getItem('authToken')){
  api = axios.create({
    baseURL: baseUrl,
    headers: {
      authorization: localStorage.getItem('authToken')
    }
  })
} else {
  api = axios.create({
    baseURL: baseUrl
  })
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

export const userProducts = async (id) => {
  const response = await api.get(`/users/${id}`)
  console.log(response)
  return response.data.products
}

export const addProductToCart = async (id) => {
  const res = await api.post(`/cart/${id}`)
  console.log(res)
  return res.data 
}

// getcart
  //get('/cart')