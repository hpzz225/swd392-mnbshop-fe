import { useState } from 'react'
import { Card, Descriptions, Tag, Image, Button, Modal, Input, InputNumber, Select } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema } from '@/lib/zod/schema'

const { Option } = Select

const product = {
  id: '12345',
  name: 'Sample Product',
  category: 'Electronics',
  price: 999.99,
  stock: 50,
  status: 'Active',
  description:
    'This is a sample product description. It provides details about the product features and specifications.',
  image:
    'https://www.watchstore.vn/images/products/others/2024/large/1-khung-sp-1-1818542633-1853976209-1712563883.webp',
}

export default function ViewProductDetail() {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: product,
  })

  const showEditModal = () => {
    reset(product)
    setIsEditModalVisible(true)
  }

  const handleEditOk = handleSubmit((data) => {
    console.log(data)
    setIsEditModalVisible(false)
  })

  const handleEditCancel = () => {
    setIsEditModalVisible(false)
  }

  return (
    <div className="px-10 py-5">
      <Card
        title={<h1 className="text-2xl font-bold">{product.name}</h1>}
        extra={
          <div className="space-x-2">
            <Button type="primary" icon={<EditOutlined />} onClick={showEditModal}>
              Edit
            </Button>
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </div>
        }
        className="shadow-lg"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 pr-4">
            <Image src={product.image} alt={product.name} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-2/3">
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Product ID">{product.id}</Descriptions.Item>
              <Descriptions.Item label="Product Name">{product.name}</Descriptions.Item>
              <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
              <Descriptions.Item label="Price">${product.price}</Descriptions.Item>
              <Descriptions.Item label="Stock">{product.stock}</Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={product.status === 'Active' ? 'green' : 'red'}>{product.status}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </Card>

      <Modal title="Edit Product" visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
        <form onSubmit={handleEditOk} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <Controller name="name" control={control} render={({ field }) => <Input {...field} className="mt-1" />} />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => <Input {...field} className="mt-1" />}
            />
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => <InputNumber {...field} className="mt-1 w-full" prefix="$" />}
            />
            {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <Controller
              name="stock"
              control={control}
              render={({ field }) => <InputNumber {...field} className="mt-1 w-full" />}
            />
            {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select {...field} className="mt-1 w-full">
                  <Option value="Active">Active</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              )}
            />
            {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Input.TextArea {...field} rows={4} className="mt-1" />}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
          </div>
        </form>
      </Modal>
    </div>
  )
}
