import { useAuth } from '@/hooks/use-auth'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

export default function ConditionalRoute({ children, roles }: { children: React.ReactNode; roles?: number[] }) {
  const { user } = useAuth()
  if (user) {
    console.log('private')
    return <PrivateRoute roles={roles}>{children}</PrivateRoute>
  } else {
    console.log('public')
    return <PublicRoute>{children}</PublicRoute>
  }
}
