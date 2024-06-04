import { GiftOutlined, UserOutlined, CodepenOutlined, BarChartOutlined, ReadOutlined } from '@ant-design/icons'
import { MenuItem } from '@/types'

export const NavigatorItems: MenuItem[] = [
  {
    label: 'Dashboard',
    key: '/home',
    icon: <BarChartOutlined />,
  },
  {
    label: 'Accounts',
    key: '/accounts-manager',
    icon: <UserOutlined />,
  },
  {
    label: 'Products',
    key: '/products-manager',
    icon: <CodepenOutlined />,
  },
  {
    label: 'Blogs',
    key: '/blogs-manager',
    icon: <ReadOutlined />,
  },
  {
    label: 'Promotion',
    key: '/promotion-manager',
    icon: <GiftOutlined />,
  },
]
