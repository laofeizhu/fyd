import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ?
                process.env.PRODUCTION_URL + '/api' 
                : 'http://localhost:' + process.env.PORT + '/api'
})