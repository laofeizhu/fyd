import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:31415/api', //base URL goes here
})