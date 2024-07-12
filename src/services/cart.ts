import apiInstance, { TOKEN_KEY } from '@/lib/axios'
import { CartAPIResponse, CustomErrorAPIResponse, DecodedToken } from '@/types'
import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'

const decodeToken = (token: string) => {
  const decodedToken = jwtDecode<DecodedToken>(token)
  return decodedToken
}

const getCartItem = async () => {
  try {
    const { data } = await apiInstance.get<CartAPIResponse>(
      import.meta.env.VITE_CART_API + decodeToken(localStorage.getItem(TOKEN_KEY)!)._id
    )
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const addCartItem = async (productId: any, quantity: number) => {
  try {
    const response = await apiInstance.post(import.meta.env.VITE_ADDTOCART_API + productId, {
      productId: productId,
      quantity: quantity,
    })
    return response.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const updateQuantity = async (productId: number, quantity: number) => {
  try {
    const response = await apiInstance.put(
      import.meta.env.VITE_UPDATECART_API +
        decodeToken(localStorage.getItem(TOKEN_KEY)!).Id +
        '?productId=' +
        productId +
        '&quantity=' +
        quantity
    )
    return response.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const deleteCartItem = async (id: number) => {
  try {
    const response = await apiInstance.delete(
      import.meta.env.VITE_DELETECART_API + decodeToken(localStorage.getItem(TOKEN_KEY)!).Id + '?productId=' + id
    )
    return response.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const createOrder = async (data: any) => {
  try {
    const response = await apiInstance.post(import.meta.env.VITE_CREATE_ORDER_API, data)
    return response.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const createCart = async () => {
  try {
    const response = await apiInstance.post(import.meta.env.VITE_CREATECART_API)
    return response.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const cartApi = {
  getCartItem,
  deleteCartItem,
  addCartItem,
  updateQuantity,
  createOrder,
  createCart,
}

export default cartApi
