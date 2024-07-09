import apiInstance from '@/lib/axios'
import { CustomErrorAPIResponse } from '@/types'
import { AxiosError } from 'axios'

const getPromotionList = async () => {
  try {
    const { data } = await apiInstance.get(import.meta.env.VITE_PROMOTION_LIST_API)
    console.log(data.data)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getPromotionById = async (id: number) => {
  try {
    const { data } = await apiInstance.get(import.meta.env.VITE_PROMOTION_LIST_API + id)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const promotionApi = {
  getPromotionList,
  getPromotionById,
}

export default promotionApi
