import apiInstance from '@/lib/axios'
import { AxiosError } from 'axios'
import { CustomErrorAPIResponse, ViewProductDetailAPIResponse, ViewProductListAPIResponse } from '@/types'

const getProductList = async () => {
  try {
    const { data } = await apiInstance.get<ViewProductListAPIResponse>(import.meta.env.VITE_M_PRODUCT_LIST_API)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getProductById = async (id: number) => {
  try {
    const { data } = await apiInstance.get<ViewProductDetailAPIResponse>(import.meta.env.VITE_M_PRODUCT_LIST_API + id)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const productListApi = {
  getProductList,
  getProductById,
}

export default productListApi
