import { queryClient } from '@/constants'
import { ROUTE_PATHS } from '@/router'
import cartApi from '@/services/cart'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import { useNavigate } from 'react-router-dom'

export const useCreateOrder = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: any) => cartApi.createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      notification.success({
        message: 'Checkout success',
      })
      navigate(ROUTE_PATHS.ROOT)
    },
    onError: () => {
      notification.error({
        message: 'Checkout failed',
      })
    },
  })
}
