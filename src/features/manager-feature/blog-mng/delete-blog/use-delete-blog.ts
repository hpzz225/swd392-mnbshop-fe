import { queryClient } from '@/constants'
import blogApi from '@/services/blog'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDeleteBlog = (id: any) => {
  return useMutation({
    mutationFn: () => {
      return blogApi.deleteBlog(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewBlogList'] })
      notification.success({
        message: 'Delete blog success',
      })
    },
    onError: () => {
      notification.error({
        message: 'Delete blog failed',
      })
    },
  })
}
