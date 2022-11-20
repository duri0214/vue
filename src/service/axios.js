import axios from 'axios'

export const axiosWrapper = axios.create({
  baseURL: 'http://localhost:8080/#',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 2000
})
