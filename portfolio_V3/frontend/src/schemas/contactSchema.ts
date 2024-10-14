import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    message: z.string().min(1, {message: "Message is required"})
})