import { z } from "zod"

export const userValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  photo: z.string(),
})
