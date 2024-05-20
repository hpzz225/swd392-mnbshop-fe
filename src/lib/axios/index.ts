import axios, { AxiosResponse } from 'axios'

export const TOKEN_KEY = 'mnb_token'
export const REFRESH_TOKEN_KEY = 'mnb_refresh_token'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SECRET,
  headers: {
    'Content-Type': 'application/json',
  },
})

//TODO: Add a request interceptor (Set token in header)
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => response?.data ?? response,
  (error) => Promise.reject(error)
)

// TODO: Clear local storage and redirect to login
export const logOutApp = async () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}

export default apiInstance
