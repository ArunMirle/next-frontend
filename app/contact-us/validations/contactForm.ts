import { z } from "zod";

export const contactFormSchema = z.object({
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    phoneNumber: z.string().optional(),
    query: z.string().optional(),
  });
  
export type ContactFormInputs = z.infer<typeof contactFormSchema>;
  
  