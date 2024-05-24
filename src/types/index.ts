import type { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

export type DecodedToken = {
  sub: string
  role: string
  iat: number
  exp: number
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
  role: string
  profilePic: string
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
