import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
const port = process.env.PORT || 5003
import userRoutes from "./routes/userRoutes.js"

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use("/api/users", userRoutes)

app.get("/", (req, res) => res.send("Server is ready"))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})
