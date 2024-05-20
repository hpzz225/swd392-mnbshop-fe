import { QueryClient } from '@tanstack/react-query'

export const dateFormatList = ['YYYY-MM-DD', 'DD-MM-YYYY']

export const AUTHORITIES = {
  ADMIN: 'ADMIN',
  CUSTOMER: 'TRAINER',
  STAFF: 'STAFF',
  GUEST: 'GUEST',
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
    },
  },
})

// Mã code màu
export const THEME_CODES = {
  PRIMARY: '#f2a7b1',
  SECONDARY: '#98deea',
}

// Regex số điện thoại VN
export const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const PAGINATION = {
  PAGE_SIZE: 10,
  PAGE_NUM: 1,
  DEFAULT_SORT: 'id',
  DEFAULT_SORT_DIR: 'asc',
}

// Tiêu đề popup
export const POPUP_TITLE = {
  FILTER: 'Filter',
}

// Thông báo lỗi
export const ERROR_MESSAGES = {
  EM1: 'The file format is incorrect',
  EM2: 'The mandatory fields are missing',
  EM3: 'The datatype is incorrect',
  EM10: 'Currently no records',
  EM11: 'Reserve successfully',
  EM12: 'Unable to change status. Please choose another status',
  EM13: 'Phone number must start with 0',
  EM14: 'Phone number must be between 10 and 11 characters',
  EM15: 'Address must be between 3 and 80 characters',
  EM16: 'Date of birth cannot be empty',
  EM17: 'Please enter a number',
  EM18: 'Fullname cannot be blank',
  EM19: 'Email cannot be blank',
  EM20: 'Gender cannot be blank',
  EM21: 'Phone number cannot be blank',
  EM22: 'Address cannot be blank',
  EM23: 'Area cannot be blank',
  EM27: 'Invalid phone number input',
  EM29: 'Please enter a valid name',
  EM30: 'Please input your Username!',
  EM31: 'Username must be minimum 6 characters.',
  EM32: 'Please input your Password!',
  EM36: 'Classnames cannot be blank',
  EM40: 'Export successfully',
  EM41: 'Please enter email description',
  EM44: 'Successfully',
  EM45: 'There has been an error',
  EM49: 'From date must be before or equal to To date',
  EM50: 'Reserving period can last maximum 6 months',
  EM52: 'Create email template successfully',
  EM53: 'Send email successfully',
  EM57: 'You do not have permission to perform this action',
}
