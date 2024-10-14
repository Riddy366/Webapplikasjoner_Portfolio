// schemas/projectSchema.ts
import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
  category: z.string().min(1, { message: "Category is required" }),
});

export type Project = z.infer<typeof projectSchema>;
