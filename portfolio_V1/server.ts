import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { ProjectSchema, type Project } from "./types";
import { z } from "zod";

const app = new Hono(); // Ny Hono instans

app.use("/*", cors()); // Alle request som kommer skal gå gjennom cors, gir bekreftelse på om du får lov til å komme deg gjennom

app.use("/static", serveStatic({ root: "./" })); // Gjør det mulig å serve statiske filer på /static

const projects: Project[] = [];

// Håndter GET forespørsel for /
<<<<<<< HEAD
app.get("/project", (c) => {
=======
app.get("/", (c) => {
>>>>>>> d2072c5ebeec8a7052f00c76c404b0c9ecac653d
    return c.json(projects);
});

// Håndter POST forespørsel for /
app.post("/", async (c) => {
<<<<<<< HEAD
    try {
        const newProject = await c.req.json();
        const project = ProjectSchema.parse(newProject);

        projects.push(project);
        return c.json(project, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return c.json({ error: "Invalid Project", details: error.errors }, { status: 400 });
        } else {
            console.error("Unexpected error:", error);
            return c.json({ error: "Internal Server Error" }, { status: 500 });
        }
    }
});
=======
  try {
      const newProject = await c.req.json();
      const project = ProjectSchema.parse(newProject);
      projects.push(project);
      return c.json(project, { status: 201 });
  } catch (error) {
      if (error instanceof z.ZodError) {
          return c.json({ error: "Invalid Project", details: error.errors }, { status: 400 });
      } else {
          console.error("Unexpected error:", error);
          return c.json({ error: "Internal Server Error" }, { status: 500 });
      }
  }
});

>>>>>>> d2072c5ebeec8a7052f00c76c404b0c9ecac653d

const port = 3999;

console.log(`Server is running on http://localhost:${port}`);

// Start serveren
serve({
    fetch: app.fetch,
    port
});
