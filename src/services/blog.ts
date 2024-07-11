import apiInstance from '@/lib/axios'
import { BlogListApiResponse, CustomErrorAPIResponse } from '@/types'
import { AxiosError } from 'axios'

const getBlogList = async () => {
  try {
    const { data } = await apiInstance.get<BlogListApiResponse>(import.meta.env.VITE_BLOG_LIST_API)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getBlogById = async (id: number) => {
  try {
    const { data } = await apiInstance.get(import.meta.env.VITE_BLOG_LIST_API + id)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const blogApi = {
  getBlogList,
  getBlogById,
}

export default blogApi
