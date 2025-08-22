import { configDotenv } from 'dotenv'
import express from 'express'
import userRoutes from './routes/user.route.js'
configDotenv()

const app = express()
const PORT = 3001

app.use(express.json())

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log(`server is running on port no ${PORT}`)
})