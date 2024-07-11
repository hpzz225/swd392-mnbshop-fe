import CustomerInfo from '@/components/customer-screen/profile/customer-info'
import SidebarInfo from '@/components/customer-screen/profile/sidebar-info'
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile'
import { useAuth } from '@/hooks/use-auth'

export default function CustomerEditProfile() {
  const { user, loadingInitial } = useAuth()

  if (loadingInitial) return <p>Loading...</p>
  return (
    <div>
      <main className="profile">
        <div className="container">
          <SearchBarMobile />
          <div className="profile-container">
            <div className="row gy-md-3">
              {/* Sidebar */}
              {user && <SidebarInfo user={user} />}
              {/* Info section */}
              {/* {user && <CustomerInfo user={user} />} */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
