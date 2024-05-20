import { ERROR_MESSAGES, phoneRegex } from '@/constants'
import { differenceInYears } from 'date-fns'

import { z } from 'zod'

export const editProfileTemplateSchema = z.object({
  fullName: z
    .string()
    .min(5, { message: ERROR_MESSAGES.EM45 })
    .max(40, { message: ERROR_MESSAGES.EM45 })
    .refine((value) => isNaN(Number(value)), { message: ERROR_MESSAGES.EM3 }),
  email: z.string({ required_error: ERROR_MESSAGES.EM19 }).email(),
  address: z
    .string({ required_error: ERROR_MESSAGES.EM22 })
    .min(3, { message: ERROR_MESSAGES.EM15 })
    .max(80, { message: ERROR_MESSAGES.EM15 }),
  gender: z.enum(['Male', 'Female'], { required_error: ERROR_MESSAGES.EM20 }),
  dob: z
    .string({ required_error: ERROR_MESSAGES.EM16 })
    .refine((dob) => differenceInYears(new Date(), new Date(dob)) >= 18, {
      message: 'User must be at least 18 years old',
    }),
  phone: z.string({ required_error: ERROR_MESSAGES.EM21 }).regex(phoneRegex, { message: ERROR_MESSAGES.EM27 }),
  role: z.string().readonly(),
  username: z.string().readonly(),
})
