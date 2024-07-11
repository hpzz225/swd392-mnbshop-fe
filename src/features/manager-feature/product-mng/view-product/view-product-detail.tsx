import { useState, useEffect } from 'react'
import { Card, Descriptions, Tag, Image, Button, Modal, Input, InputNumber, Select, Switch } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema } from '@/lib/zod/schema'
import { useParams } from 'react-router-dom'
import { useViewProductDetail } from './use-view-product-detail'
import { ProductDetail } from '@/types'
import { useEditProduct } from '../edit-product/use-edit-product'
import { useViewBrandList } from '../../brand-mng/view-brand/use-view-brand-list'

const { Option } = Select

export default function ViewProductDetail() {
  const { productId } = useParams()
  const { data: product, isLoading } = useViewProductDetail(productId)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const editProductMutation = useEditProduct(productId)
  const { data: brandList } = useViewBrandList()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductDetail>({
    resolver: zodResolver(productSchema),
    defaultValues: product,
  })

  useEffect(() => {
    reset(product)
  }, [product, reset])

  const showEditModal = () => {
    setIsEditModalVisible(true)
  }

  const handleEditOk = handleSubmit((data) => {
    console.log(data)
    editProductMutation.mutate(data)
    setIsEditModalVisible(false)
  })

  const handleEditCancel = () => {
    setIsEditModalVisible(false)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="px-10 py-5">
      <Card
        title={<h1 className="text-2xl font-bold">{product?.productName}</h1>}
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
            <Image src={product?.productImg} alt={product?.productName} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-2/3">
            <Descriptions bordered column={2}>
              <Descriptions.Item label="Product ID">{product?._id}</Descriptions.Item>
              <Descriptions.Item label="Product Name">{product?.productName}</Descriptions.Item>
              <Descriptions.Item label="Brand ID">{product?.brandId?._id}</Descriptions.Item>
              <Descriptions.Item label="Brand">{product?.brandId?.brandName}</Descriptions.Item>
              <Descriptions.Item label="Price">${product?.productPrice}</Descriptions.Item>
              <Descriptions.Item label="Stock">{product?.quantity}</Descriptions.Item>
              <Descriptions.Item label="By Age">{product?.byAge}</Descriptions.Item>
              <Descriptions.Item label="Pre-Order">{product?.isPreOrder ? 'Yes' : 'No'}</Descriptions.Item>
              <Descriptions.Item label="Pre-Order Amount">{product?.preOrderAmount || 'N/A'}</Descriptions.Item>
              <Descriptions.Item label="Promoted">{product?.isPromote ? 'Yes' : 'No'}</Descriptions.Item>
              <Descriptions.Item label="Disabled">{product?.isDisable ? 'Yes' : 'No'}</Descriptions.Item>
              <Descriptions.Item label="Description">{product?.productDescription}</Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </Card>

      <Modal title="Edit Product" visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
        <form onSubmit={handleEditOk} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => <Input {...field} className="mt-1" />}
            />
            {errors.productName && <p className="mt-1 text-sm text-red-600">{errors.productName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <Controller
              name="brandId"
              control={control}
              render={({ field }) => (
                <Select {...field} className="mt-1 w-full">
                  {brandList?.map((brand) => (
                    <Option key={brand._id} value={brand._id}>
                      {brand.brandName}
                    </Option>
                  ))}
                </Select>
              )}
            />
            {errors.brandId && <p className="mt-1 text-sm text-red-600">{errors.brandId.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image URL</label>
            <Controller
              name="productImg"
              control={control}
              render={({ field }) => <Input {...field} className="mt-1" />}
            />
            {errors.productImg && <p className="mt-1 text-sm text-red-600">{errors.productImg.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <Controller
              name="productPrice"
              control={control}
              render={({ field }) => <InputNumber {...field} className="mt-1 w-full" prefix="$" />}
            />
            {errors.productPrice && <p className="mt-1 text-sm text-red-600">{errors.productPrice.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => <InputNumber {...field} className="mt-1 w-full" />}
            />
            {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">By Age</label>
            <Controller
              name="byAge"
              control={control}
              render={({ field }) => <InputNumber {...field} className="mt-1 w-full" />}
            />
            {errors.byAge && <p className="mt-1 text-sm text-red-600">{errors.byAge.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pre-Order</label>
            <Controller
              name="isPreOrder"
              control={control}
              render={({ field }) => <Switch {...field} checked={field.value} />}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pre-Order Amount</label>
            <Controller
              name="preOrderAmount"
              control={control}
              render={({ field }) => <InputNumber {...field} className="mt-1 w-full" />}
            />
            {errors.preOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.preOrderAmount.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Promoted</label>
            <Controller
              name="isPromote"
              control={control}
              render={({ field }) => <Switch {...field} checked={field.value} />}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Disabled</label>
            <Controller
              name="isDisable"
              control={control}
              render={({ field }) => <Switch {...field} checked={field.value} />}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Controller
              name="productDescription"
              control={control}
              render={({ field }) => <Input.TextArea {...field} rows={4} className="mt-1" />}
            />
            {errors.productDescription && (
              <p className="mt-1 text-sm text-red-600">{errors.productDescription.message}</p>
            )}
          </div>
        </form>
      </Modal>
    </div>
  )
}
