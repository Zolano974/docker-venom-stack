import axios from 'axios'

let baseUrl = process.env.API_URL || 'http://localhost:53000'
// let baseUrl = process.env.API_URL || 'http://kanopole-api:3000/'

console.log(baseUrl)

let apiClient = axios.create({
    baseURL: baseUrl
})

export default apiClient
