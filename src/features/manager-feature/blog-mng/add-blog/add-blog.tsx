// AddArticle.tsx
import React, { useState } from 'react'
import { Modal, Button, Input, DatePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { articleSchema } from '@/lib/zod/schema'
import { useAddBlog } from './use-add-blog'
import { z } from 'zod'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { POPUP_TITLE } from '@/constants'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'

const { TextArea } = Input

export type ArticleFormData = z.infer<typeof articleSchema>

export default function AddBlog() {
  const dispatch = useAppDispatch()
  const addBlogMutation = useAddBlog()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
  })

  const handleOk = handleSubmit((data) => {
    const newArticle = {
      ...data,
      publishDate: new Date(),
      userID: 1,
    }
    addBlogMutation.mutate(newArticle)
    dispatch(closePopup(POPUP_TITLE.ADD_BLOG))
    reset()
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.ADD_BLOG))
    reset()
  }

  return (
    <div>
      <form onSubmit={handleOk} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <Controller name="title" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => <TextArea {...field} rows={4} className="mt-1" />}
          />
          {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>}
        </div>

        <div className="flex justify-end gap-3">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button danger onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
