import { Layout, Card, Statistic, Row, Col, Table } from 'antd'
import { UserOutlined, ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons'

const { Content } = Layout

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
]

const data = [
  {
    key: 1,
    id: '#1234',
    customer: 'John Brown',
    amount: '$300',
    status: 'Completed',
  },
  {
    key: 2,
    id: '#1235',
    customer: 'Jim Green',
    amount: '$150',
    status: 'Pending',
  },
  {
    key: 3,
    id: '#1236',
    customer: 'Joe Black',
    amount: '$200',
    status: 'Processing',
  },
]

export default function DashboardInfo() {
  return (
    <div>
      <Content>
        <Row gutter={16} className="mb-6">
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Sales"
                value={112893}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DollarOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="New Customers"
                value={1893}
                valueStyle={{ color: '#cf1322' }}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Orders" value={9280} prefix={<ShoppingCartOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Conversion Rate"
                value={13.5}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Card title="Recent Orders" className="mb-6">
          <Table columns={columns} dataSource={data} />
        </Card>
      </Content>
    </div>
  )
}
