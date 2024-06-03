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
