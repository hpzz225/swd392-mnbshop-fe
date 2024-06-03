import ConfigAntdTheme from '@/lib/antd/config-theme'
import { Menu, Layout, Button } from 'antd'
import { CloseOutlined, BarsOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { NavigatorItems } from '@/constants/menu-data'
import { useNavigate } from 'react-router-dom'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'

const { Sider } = Layout

export default function Navigator() {
  const [isCollapse, setIsCollapse] = useState(false)
  const navigate = useNavigate()
  const toggleCollapse = () => setIsCollapse((prev) => !prev)

  return (
    <ConfigAntdTheme theme={DefaultButtonStyle}>
      <Sider className="h-full" collapsible trigger={null} collapsed={isCollapse}>
        <Button className={isCollapse ? 'mx-4 my-2' : 'mx-2.5 my-2'} type="text" onClick={toggleCollapse}>
          {isCollapse ? <BarsOutlined className="text-lg" /> : <CloseOutlined className="text-lg" />}
        </Button>
        <Menu onClick={({ key }) => navigate(key)} className="bg-foreground" mode="inline" items={NavigatorItems} />
      </Sider>
    </ConfigAntdTheme>
  )
}
