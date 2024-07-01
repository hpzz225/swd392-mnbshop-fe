import CustomerFooter from '@/components/customer-screen/customer-footer'
import CustomerHeader from '@/components/customer-screen/customer-header'
import { useAuth } from '@/hooks/use-auth'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  return (
    <div>
      <CustomerHeader isLoginPage={!!user} />
      {children}
      <CustomerFooter />
    </div>
  )
}
