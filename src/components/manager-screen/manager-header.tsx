import Flag from '@/assets/img/avatar.jpg'
import Logo from '@/assets/img/avatar.jpg'
import avatar from '@/assets/img/avatar.jpg'
import { Header as AntHeader } from 'antd/es/layout/layout'
import { Typography, Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS_MANAGER } from '@/router'
import { useAuth } from '@/hooks/use-auth'

export default function ManagerHeader({ isLoginPage }: { isLoginPage: boolean }) {
  const navigate = useNavigate()
  const { logoutMutation, user } = useAuth()
  return (
    <div>
      <AntHeader className="bg-primary flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-16" />
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center gap-2 bg-[#0B2136] text-white px-4 py-3 rounded-full">
            <img src={Flag} alt="Flag" />
            <Typography.Text className="text-white text-xs">uniGate</Typography.Text>
          </div>
          {!isLoginPage ? (
            <div className="flex items-center gap-2">
              <Avatar
                src={user?.data.profilePic ? user?.data.profilePic : avatar}
                size={46}
                className="border-white border-2 cursor-pointer"
                onClick={() => navigate(ROUTE_PATHS_MANAGER.PROFILE)}
              />
              <div className="flex flex-col">
                <Typography.Text className="text-white">{user?.data.fullName}</Typography.Text>
                <Typography.Text className="text-white cursor-pointer" onClick={() => logoutMutation.mutate()}>
                  Log out
                </Typography.Text>
              </div>
            </div>
          ) : null}
        </div>
      </AntHeader>
    </div>
  )
}
