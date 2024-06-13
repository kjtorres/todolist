const express = require("express")

const app = express()
const PORT = process.env.APP_PORT

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`))

/**
 * MIDDLEWARES
 */

app.use(express.json())

