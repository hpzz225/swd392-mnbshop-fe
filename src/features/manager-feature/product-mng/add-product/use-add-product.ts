import { queryClient } from '@/constants'
import productListApi from '@/services/product-list'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddProduct = () => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return productListApi.addProduct(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewProductList'] })
      notification.success({
        message: 'Add product success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Add product failed',
      })
    },
  })
}
