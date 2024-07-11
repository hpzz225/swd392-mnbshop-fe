import { queryClient } from '@/constants'
import blogApi from '@/services/blog'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEditBlog = (id: any) => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return blogApi.updateBlog(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewBlogDetail'] })
      notification.success({
        message: 'Update Success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Update Failed',
      })
    },
  })
}
