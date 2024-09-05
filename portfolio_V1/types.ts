import { z } from "zod";

// Definer skjema for Project uten id
export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.string(),
});

// Samme skjema for å opprette prosjekt
export const ProjectCreateSchema = ProjectSchema;

// Definer TypeScript-typer basert på skjemaene
export type Project = z.infer<typeof ProjectSchema>;
export type CreateProject = z.infer<typeof ProjectCreateSchema>;
