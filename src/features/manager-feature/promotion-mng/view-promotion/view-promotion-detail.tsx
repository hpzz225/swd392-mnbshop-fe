import * as z from 'zod'
import moment from 'moment'
import { useState } from 'react'
import { Card, Button, Descriptions, Tag, Image, Modal, Form, Input, DatePicker, Switch } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useViewPromotionDetail } from './use-view-promotion-detail'
import { useParams } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { promotionSchema } from '@/lib/zod/schema'

type FormData = z.infer<typeof promotionSchema>

export default function ViewPromotionDetail() {
  const { promotionId } = useParams()
  const { data: promotion } = useViewPromotionDetail(Number(promotionId))
  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(promotionSchema),
    defaultValues: promotion,
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    setIsModalVisible(false)
  }

  return (
    <div className="w-7/12 mx-auto p-4">
      <Card
        title={<h2 className="text-2xl font-bold">{promotion?.promotionName}</h2>}
        extra={
          <Button type="primary" icon={<EditOutlined />} onClick={() => setIsModalVisible(true)}>
            Edit
          </Button>
        }
        cover={
          <Image alt={promotion?.promotionName} src={promotion?.promotionImg} className="object-cover h-48 w-6/12" />
        }
        className="shadow-lg"
      >
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Promotion ID">{promotion?.promotionId}</Descriptions.Item>
          <Descriptions.Item label="Start Time">{new Date(promotion?.startAt).toLocaleString()}</Descriptions.Item>
          <Descriptions.Item label="End Time">{new Date(promotion?.endAt).toLocaleString()}</Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={promotion?.status ? 'green' : 'red'}>{promotion?.status ? 'Active' : 'Inactive'}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Discount Rate">{promotion?.promote}%</Descriptions.Item>
        </Descriptions>
      </Card>

      <Modal
        title="Edit Promotion"
        visible={isModalVisible}
        onOk={handleSubmit(onSubmit)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item
            label="Promotion Name"
            validateStatus={errors.promotionName ? 'error' : ''}
            help={errors.promotionName?.message}
          >
            <Controller name="promotionName" control={control} render={({ field }) => <Input {...field} />} />
          </Form.Item>

          <Form.Item label="Start Time" validateStatus={errors.startAt ? 'error' : ''} help={errors.startAt?.message}>
            <Controller
              name="startAt"
              control={control}
              render={({ field }) => (
                <DatePicker showTime {...field} value={field.value ? moment(field.value) : null} />
              )}
            />
          </Form.Item>

          <Form.Item label="End Time" validateStatus={errors.endAt ? 'error' : ''} help={errors.endAt?.message}>
            <Controller
              name="endAt"
              control={control}
              render={({ field }) => (
                <DatePicker showTime {...field} value={field.value ? moment(field.value) : null} />
              )}
            />
          </Form.Item>

          <Form.Item label="Status" validateStatus={errors.status ? 'error' : ''} help={errors.status?.message}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => <Switch {...field} checked={field.value} />}
            />
          </Form.Item>

          <Form.Item
            label="Discount Rate"
            validateStatus={errors.promote ? 'error' : ''}
            help={errors.promote?.message}
          >
            <Controller name="promote" control={control} render={({ field }) => <Input type="number" {...field} />} />
          </Form.Item>

          <Form.Item
            label="Promotion Image URL"
            validateStatus={errors.promotionImg ? 'error' : ''}
            help={errors.promotionImg?.message}
          >
            <Controller name="promotionImg" control={control} render={({ field }) => <Input {...field} />} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
