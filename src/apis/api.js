import axios from 'axios'
import { getAuthToken } from '../utils/auth'

const API_PATH = 'http://localhost:8087'

const authAxios = axios.create({
  baseURL: API_PATH,
  headers: {
    Authorization: 'Bearer ' + getAuthToken()
  }
})

export {
  API_PATH,
  authAxios
}