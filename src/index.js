const express = require("express")
const taskRoute = require("./routes/tasks")
const { specs, swaggerUi } = require('./swagger');

const app = express()
const PORT = process.env.APP_PORT

require("./database/config")

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`))

/**
 * MIDDLEWARES
 */

app.use(express.json())

/**
 * DOCUMENTATION
 */
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * ROUTES
 */

app.use("/api/v1/tasks", taskRoute)
