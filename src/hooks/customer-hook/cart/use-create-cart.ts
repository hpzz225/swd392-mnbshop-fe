import cartApi from '@/services/cart'
import { useMutation } from '@tanstack/react-query'

export const useCreateCart = () => {
  return useMutation({
    mutationFn: () => cartApi.createCart(),
  })
}
