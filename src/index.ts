import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import CONFIG from "./configs/environtment"
import { logger } from "./utils/logger"

// Imported Routes
import userRoutes from "./routes/userRoutes"

dotenv.config()
const app: Application = express()

app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  next()
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use("/api/auth", userRoutes)

// Server listening
app.listen(CONFIG.port, () => {
  logger.info(`Server running on port ${CONFIG.port}`)
})

export default app
