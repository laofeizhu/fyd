import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://cloudsail.appspot.com/api' // base URL goes here
})
