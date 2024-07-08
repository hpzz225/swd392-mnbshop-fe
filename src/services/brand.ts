import apiInstance from '@/lib/axios'
import { BrandListApiResponse, CustomErrorAPIResponse } from '@/types'
import { AxiosError } from 'axios'

const getBrandList = async () => {
  try {
    const { data } = await apiInstance.get<BrandListApiResponse[]>(import.meta.env.VITE_BRAND_LIST_API)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getBrandById = async (id: number) => {
  try {
    const { data } = await apiInstance.get<BrandListApiResponse>(import.meta.env.VITE_BRAND_LIST_API + id)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const brandApi = {
  getBrandList,
  getBrandById,
}

export default brandApi
