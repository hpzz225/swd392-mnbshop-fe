import { AUTHORITIES } from '@/constants'
import LoginLayout from '@/layouts/login-layout'
import DefaultLayout from '@/layouts/manager-layouts/default-layout'
import BlogsList from '@/pages/customer-pages/blogs-list'
import CustomerProfile from '@/pages/customer-pages/customer-profile'
import HomePage from '@/pages/customer-pages/home-page'
import ProductDetail from '@/pages/customer-pages/product-detail'
import ProductsList from '@/pages/customer-pages/products-list'
import ForgotPassword from '@/pages/forgot-password'
import Login from '@/pages/login'
import SignUp from '@/pages/sign-up'

export const ROUTE_PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  FORGOT: '/forgot',
  SIGNUP: '/signup',
  PRODUCT: '/products',
  BLOG: '/blogs',
}

export const ROUTE_PATHS_CUSTOMER = {
  ROOT: '/',
  PROFILE: '/profile',
}

export const ROUTE_PATHS_MANAGER = {
  HOME: '/home',
  PROFILE: '/profile',
  M_PRODUCT: '/products',
  M_BLOG: '/blogs',
  M_ACCOUNT: '/account',
  M_PROMOTION: '/promotion',
}

export const routes = [
  {
    path: ROUTE_PATHS_CUSTOMER.ROOT,
    name: 'Home',
    component: HomePage,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS.LOGIN,
    name: 'Login',
    component: Login,
    layout: LoginLayout,
  },
  {
    path: ROUTE_PATHS.SIGNUP,
    name: 'Signup',
    component: SignUp,
    layout: LoginLayout,
  },
  {
    path: ROUTE_PATHS.FORGOT,
    name: 'Forgot',
    component: ForgotPassword,
    layout: LoginLayout,
  },
  {
    path: ROUTE_PATHS.PRODUCT,
    name: 'Product',
    component: ProductsList,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: `${ROUTE_PATHS.PRODUCT}/:productId`,
    name: 'Product Detail',
    component: ProductDetail,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS.BLOG,
    name: 'Blog',
    component: BlogsList,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_CUSTOMER.PROFILE,
    name: 'Profile',
    component: CustomerProfile,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_MANAGER.M_ACCOUNT,
    name: 'Account',
    component: CustomerProfile,
    layout: DefaultLayout,
    private: true,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
]
