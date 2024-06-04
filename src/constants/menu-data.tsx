import { GiftOutlined, UserOutlined, CodepenOutlined, BarChartOutlined, ReadOutlined } from '@ant-design/icons'
import { MenuItem } from '@/types'
import { ROUTE_PATHS_MANAGER } from '@/router'

export const NavigatorItems: MenuItem[] = [
  {
    label: 'Dashboard',
    key: '/dashboard' || ROUTE_PATHS_MANAGER.DASHBOARD,
    icon: <BarChartOutlined />,
  },
  {
    label: 'Accounts',
    key: '/accounts' || ROUTE_PATHS_MANAGER.M_ACCOUNT,
    icon: <UserOutlined />,
  },
  {
    label: 'Products',
    key: '/products' || ROUTE_PATHS_MANAGER.M_PRODUCT,
    icon: <CodepenOutlined />,
  },
  {
    label: 'Blogs',
    key: '/blogs' || ROUTE_PATHS_MANAGER.M_BLOG,
    icon: <ReadOutlined />,
  },
  {
    label: 'Promotion',
    key: '/promotion' || ROUTE_PATHS_MANAGER.M_PROMOTION,
    icon: <GiftOutlined />,
  },
]
