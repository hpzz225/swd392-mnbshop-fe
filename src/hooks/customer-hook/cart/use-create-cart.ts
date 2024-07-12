import cartApi from '@/services/cart'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useCreateCart = () => {
  return useMutation({
    mutationFn: () => cartApi.createCart(),
    onSuccess: () => {
      notification.success({
        message: 'Create cart success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Create cart failed',
      })
    },
  })
}
