import apiInstance from '@/lib/axios'
import { CustomErrorAPIResponse, OrderDetailApiResponse, OrderListApiResponse } from '@/types'
import { AxiosError } from 'axios'

const getOrderList = async () => {
  try {
    const { data } = await apiInstance.get<OrderListApiResponse>(import.meta.env.VITE_ORDER_LIST_API)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getOrderById = async (id: number) => {
  try {
    const { data } = await apiInstance.get<OrderDetailApiResponse>(import.meta.env.VITE_ORDER_LIST_API + id)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const orderApi = {
  getOrderList,
  getOrderById,
}

export default orderApi
