import apiInstance from '@/lib/axios'
import { AccountDetailApiResponse, AccountListApiResponse, CustomErrorAPIResponse } from '@/types'
import { AxiosError } from 'axios'

const getListAccount = async () => {
  try {
    const { data } = await apiInstance.get<AccountListApiResponse>(import.meta.env.VITE_ACCOUNT_LIST_API)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getAccountById = async (id: number) => {
  try {
    const { data } = await apiInstance.get<AccountDetailApiResponse>(import.meta.env.VITE_ACCOUNT_DETAIL_API + id)
    return data.data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const disableAccount = async (id: number) => {
  try {
    const { data } = await apiInstance.put(import.meta.env.VITE_ACCOUNT_DISABLE_API + id)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const accountApi = {
  getListAccount,
  getAccountById,
  disableAccount,
}

export default accountApi
