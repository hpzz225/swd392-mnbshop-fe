import { queryClient } from '@/constants'
import accountApi from '@/services/account'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useDisableAccount = () => {
  return useMutation({
    mutationFn: (id: number) => accountApi.disableAccount(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accountList'] })
      notification.success({
        message: 'Disable success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Disable failed',
      })
    },
  })
}
