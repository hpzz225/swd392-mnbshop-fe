import { queryClient } from '@/constants'
import blogApi from '@/services/blog'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddBlog = () => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return blogApi.addBlog(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewBlogList'] })
      notification.success({
        message: 'Add blog success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Add blog failed',
      })
    },
  })
}
