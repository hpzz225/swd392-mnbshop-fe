import apiInstance from '@/lib/axios'
import { AxiosError } from 'axios'
import { CustomErrorAPIResponse, ViewProductListAPIResponse } from '@/types'

const getProductList = async () => {
  try {
    const { data } = await apiInstance.get<ViewProductListAPIResponse>(import.meta.env.VITE_M_PRODUCT_LIST_API)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const productListApi = {
  getProductList,
}

export default productListApi
