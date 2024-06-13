import { Menu, Layout, Button } from 'antd'
import { CloseOutlined, BarsOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { NavigatorItems } from '@/constants/menu-data'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

export default function Navigator() {
  const [isCollapse, setIsCollapse] = useState(false)
  const navigate = useNavigate()
  const toggleCollapse = () => setIsCollapse((prev) => !prev)

  return (
    <Sider className="h-full flex flex-col " collapsible trigger={null} collapsed={isCollapse}>
      <Button className={isCollapse ? 'mx-7 my-2' : 'mx-5 my-2'} type="text" onClick={toggleCollapse}>
        {isCollapse ? (
          <BarsOutlined className="text-lg" />
        ) : (
          <>
            <CloseOutlined className="text-lg mr-3" /> Close
          </>
        )}
      </Button>
      <Menu onClick={({ key }) => navigate(key)} className="bg-foreground" mode="inline" items={NavigatorItems} />
    </Sider>
  )
}
