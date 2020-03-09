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