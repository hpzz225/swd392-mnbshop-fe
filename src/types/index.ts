import type { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

export type DecodedToken = {
  jti: string
  Id: string
  RoleId: string
  Role: string
  exp: number
  iss: string
  aud: string
}

export type InputsType = {
  key: string
  label: string
  type: 'text' | 'input' | 'select' | 'date' | 'badge' | 'textarea'
  isAllowEdit?: boolean
  options?: { key: string; value: string | number }[]
}

export type InputsField = {
  view?: InputsType[]
  viewCertification?: InputsType[]
  edit?: InputsType[]
  editStatus?: InputsType[]
  editCertification?: InputsType[]
  add?: InputsType[]
}

export type AuthUser = {
  id: number
  fullName: string
  email: string
  dob: string
  address: string
  gender: string
  phone: string
  username: string
  roleId: number
  profilePic: string
}

export type SignUpForm = {
  username: string
  password: string
  fullName: string
  dateOfBirth: string
  gender: boolean
  address: string
  phone: string
  email: string
}

export type GetCurrentUserAPIResponse = {
  message: string
  httpStatus: string
  timeStamp: Date
  data: AuthUser
}

export type LoginUserAPIResponse = {
  message: string
  httpStatus: string
  timeStamp: Date
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type BrandTableData = {
  key: React.Key
  brandId: string
  brandName: string
  image: string
  numberOfProducts: number
  updateAt: string
}

export type ProductTableData = {
  key: React.Key
  productId: string
  productName: string
  brand: string
  price: number
  discount: number
  quantity: number
  byAge: number
}

export type ProductDetail = {
  productId: string
  productName: string
  brand: string
  price: number
  discount: number
  quantity: number
  byAge: number
}

export type OrderTableData = {
  orderId: string
  userId: string
  userName: string
  address: string
  phone: string
  productId: string[]
  orderDate: string
  status: string
  totalPrice: number
}

export type AccountTableData = {
  key: React.Key
  id: string
  fullName: string
  phone: string
  email: string
  address: string
  gender: string
  dob: string
  isDisable: boolean
  role: string
}

export type AccountDetail = {
  id: string
  fullName: string
  phone: string
  email: string
  address: string
  gender: string
  dob: string
  isDisable: boolean
  role: string
  image: string
}

// API Response
export type CustomErrorAPIResponse = {
  statusCode: number
  message: string
  timestamp: string
}

export type ViewProductListAPIResponse = {
  message: string
  httpStatus: string
  timestamp: string
  data: ProductDetail[]
}
