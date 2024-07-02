import { ERROR_MESSAGES, phoneRegex } from '@/constants'
import { differenceInYears } from 'date-fns'

import { z } from 'zod'

export const editProfileTemplateSchema = z.object({
  fullName: z
    .string()
    .min(5, { message: ERROR_MESSAGES.EM1 })
    .max(40, { message: ERROR_MESSAGES.EM1 })
    .refine((value) => isNaN(Number(value)), { message: ERROR_MESSAGES.EM1 }),
  email: z.string({ required_error: ERROR_MESSAGES.EM1 }).email(),
  address: z
    .string({ required_error: ERROR_MESSAGES.EM1 })
    .min(3, { message: ERROR_MESSAGES.EM1 })
    .max(80, { message: ERROR_MESSAGES.EM1 }),
  gender: z.enum(['Male', 'Female'], { required_error: ERROR_MESSAGES.EM1 }),
  dob: z
    .string({ required_error: ERROR_MESSAGES.EM1 })
    .refine((dob) => differenceInYears(new Date(), new Date(dob)) >= 18, {
      message: 'User must be at least 18 years old',
    }),
  phone: z.string({ required_error: ERROR_MESSAGES.EM1 }).regex(phoneRegex, { message: ERROR_MESSAGES.EM1 }),
  role: z.string().readonly(),
  username: z.string().readonly(),
})

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  category: z.string().min(1, 'Category is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  stock: z.number().int().min(0, 'Stock must be a non-negative integer'),
  status: z.enum(['Active', 'Inactive']),
  description: z.string().min(1, 'Description is required'),
})

export const accountSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  image: z.string().min(1, 'Image is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Address is required'),
  gender: z.enum(['Male', 'Female', 'Other']),
  dob: z.string().min(1, 'Date of birth is required'),
  role: z.string().min(1, 'Role is required'),
})

export const signUpSchema = z
  .object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    dateOfBirth: z.string(),
    gender: z.string(),
    address: z.string(),
    phone: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
    email: z.string().email('Invalid email address'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
