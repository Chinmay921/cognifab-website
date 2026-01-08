import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters").max(100),
  role: z.string().min(2, "Role must be at least 2 characters").max(100),
  currentSystems: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const leadFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().min(2).max(100),
  honeypot: z.string().max(0).optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
