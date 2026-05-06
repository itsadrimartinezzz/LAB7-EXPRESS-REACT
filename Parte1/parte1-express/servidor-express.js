import express from "express"
import fs from "fs/promises"
import path from "path"

const app = express()
const PORT = 3004

app.get("/", (req, res) => {
  res.type("text/plain")
  res.send("Servidor activo")
})

app.get("/info", (req, res) => {
  res.json({
    mensaje: "Holaa! Probando me escuchan? Comando estelar",
    curso: "Sistemas y Tecnologías Web",
    tecnologia: "Express"
  })
})

app.get("/saludo", (req, res) => {
  res.type("text/plain")
  res.send("Hola, bienvenidos a Sunnyside soy Lotso!")
})

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    status: "Todo funcionando correctamente",
    puerto: PORT
  })
})

app.get("/api/student", async (req, res) => {
  const filePath = path.join(process.cwd(), "datos.json")
  const texto = await fs.readFile(filePath, "utf-8")
  const datos = JSON.parse(texto)

  res.json(datos)
})

app.use((req, res) => {
  res.status(404).type("text/plain")
  res.send(`La ruta ${req.originalUrl} no fue encontrada`)
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})