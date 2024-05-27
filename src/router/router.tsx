import CustomerHeader from '@/components/customer-screen/customer-header'
import CustomerFooter from '@/components/customer-screen/customer-footer'
import { Route, Routes } from 'react-router-dom'
import { routes } from '.'

export default function Router() {
  return (
    <div>
      <Routes>
        {routes.map((route) => {
          const Page = route.component
          const Layout = route.layout
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.private ? ( // Check if the route is private
                  <div>
                    {Layout ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <div>
                        <Page />
                      </div>
                    )}
                  </div>
                ) : Layout ? (
                  <div>
                    <Layout>
                      <Page />
                    </Layout>
                  </div>
                ) : (
                  <div>
                    <CustomerHeader isLoginPage={false} />
                    <Page />
                    <CustomerFooter />
                  </div>
                )
              }
            />
          )
        })}
      </Routes>
    </div>
  )
}
