import { AUTHORITIES } from '@/constants'
import LoginLayout from '@/layouts/login-layout'
import DefaultLayout from '@/layouts/manager-layouts/default-layout'
import BlogsList from '@/pages/customer-pages/blogs-list'
import CustomerProfile from '@/pages/customer-pages/customer-profile'
import HomePage from '@/pages/customer-pages/home-page'
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
  PRODUCT: '/products',
  BLOG: '/blogs',
  PROFILE: '/profile',
}

export const ROUTE_PATHS_MANAGER = {
  ROOT: '/',
  LOGIN: '/login',
  FORGOT: '/forgot',
  SIGNUP: '/signup',
  PRODUCT: '/products',
  BLOG: '/blogs',
  PROFILE: '/profile',
  M_ACCOUNT: '/account',
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
    path: ROUTE_PATHS_CUSTOMER.PRODUCT,
    name: 'Product',
    component: ProductsList,
    layout: null,
    roles: [AUTHORITIES.GUEST, AUTHORITIES.CUSTOMER],
  },
  {
    path: ROUTE_PATHS_CUSTOMER.BLOG,
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
