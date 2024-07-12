/* eslint-disable @typescript-eslint/no-explicit-any */
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
    const { data } = await apiInstance.get(import.meta.env.VITE_BLOG_DETAIL_API + id)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const addBlog = async (data: FormData) => {
  try {
    const { data: response } = await apiInstance.post(import.meta.env.VITE_BLOG_CREATE_API, data)
    return response
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const updateBlog = async (id: any, data: FormData) => {
  try {
    const { data: response } = await apiInstance.put(import.meta.env.VITE_BLOG_UPDATE_API + id, data)
    return response
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const deleteBlog = async (id: any) => {
  try {
    const { data: response } = await apiInstance.delete(import.meta.env.VITE_BLOG_DELETE_API + id)
    return response
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const blogApi = {
  getBlogList,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
}

export default blogApi
