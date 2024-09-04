import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "fs/promises";

const app = new Hono() //Ny Hono instans

app.use("/*", cors()) // Alle request som kommer skal gå gjennom cors, gir bekreftelse på om du får lov til å komme deg gjennom

app.use("/statics*/", serveStatic({root: "./"})) // Gjør det mulig å serve statiske filer på statics

// app.get sier at den sal lytte til en get forespørssel, skal hente port 3999/json (definerer url vi skal hente fra)
// c er hjelp vi får fra Hono for å gi oss hjelpemetoder (returnere noe i json format)
app.get("/json", async (c) => {
    const data = await readFile("./projects.json", "utf-8")
    return c.json((JSON.parse(data)))
})

const port = 3999

console.log("Server is Running")

// slik serveren skal starte Hono for node servere
serve({
    fetch: app.fetch,
    port
})