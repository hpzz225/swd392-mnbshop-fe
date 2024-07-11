import apiInstance from '@/lib/axios'
import { CustomErrorAPIResponse } from '@/types'
import { AxiosError } from 'axios'

const getPromotionList = async () => {
  try {
    const { data } = await apiInstance.get(import.meta.env.VITE_PROMOTION_LIST_API)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getPromotionById = async (id: any) => {
  try {
    const { data } = await apiInstance.get(import.meta.env.VITE_PROMOTION_DETAIL_API + id)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const addPromotion = async (data: FormData) => {
  try {
    const { data: response } = await apiInstance.post(import.meta.env.VITE_PROMOTION_CREATE_API, data)
    return response
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const updatePromotion = async (id: any, data: FormData) => {
  try {
    const { data: response } = await apiInstance.put(import.meta.env.VITE_PROMOTION_UPDATE_API + id, data)
    return response
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const deletePromotion = async (id: any) => {
  try {
    const { data: response } = await apiInstance.delete(import.meta.env.VITE_PROMOTION_DELETE_API + id)
    return response
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const promotionApi = {
  getPromotionList,
  getPromotionById,
  addPromotion,
  updatePromotion,
  deletePromotion,
}

export default promotionApi
