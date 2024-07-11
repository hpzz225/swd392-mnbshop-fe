import { ProductInOrder } from '@/types'
import { Card, Descriptions, Table, Tag, Typography, Image } from 'antd'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'
import { useViewOrderDetail } from './use-view-order-detail'

const { Title } = Typography

export default function ViewOrderDetail() {
  const { orderId } = useParams()
  const orderIdNumber = orderId ? parseInt(orderId, 10) : 0
  const { data: order } = useViewOrderDetail(orderIdNumber)

  const columns = [
    {
      title: 'Product',
      dataIndex: 'productName',
      key: 'productName',
      render: (text: string) => (
        <div className="flex items-center">
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text: string, record: ProductInOrder) => (
        <div className="flex items-center">
          <Image src={record.image} alt={text} width={150} className="mr-2" />
        </div>
      ),
    },
    {
      title: 'Brand',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
      render: (unitPrice: number) => `$${unitPrice}`,
    },
    {
      title: 'Total',
      key: 'total',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, record: ProductInOrder) => `$${record.quantity * record.unitPrice}`,
    },
  ]

  return (
    <div className="p-6">
      <Title level={2}>Order Details</Title>
      <Card className="mb-6">
        <Descriptions title="Order Information" bordered>
          <Descriptions.Item label="Order ID">{order?.orderId}</Descriptions.Item>
          <Descriptions.Item label="Customer Name">{order?.fullName}</Descriptions.Item>
          <Descriptions.Item label="Phone">{order?.phone}</Descriptions.Item>
          <Descriptions.Item label="Address">{order?.deliverAddress}</Descriptions.Item>
          <Descriptions.Item label="Order Date">{dayjs(order?.orderDate).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
          <Descriptions.Item label="Payment Method">{order?.paymentMethod}</Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={order?.status === 'Completed' ? 'green' : 'blue'}>{order?.status.toLocaleUpperCase()}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Total Price">${order?.totalPrice}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="Order Items" className="mb-6">
        <Table columns={columns} dataSource={order?.productOrders} rowKey="productId" pagination={false} />
      </Card>

      <Card>
        <Descriptions title="Additional Information">
          <Descriptions.Item label="Staff ID">{order?.staffId || 'N/A'}</Descriptions.Item>
          <Descriptions.Item label="User ID">{order?.userId}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}
