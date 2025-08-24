import express from 'express'
import ConnectDb from './utils/db.con.js'
import { configDotenv } from 'dotenv'
import userRoutes from './routes/user.route.js'

configDotenv()

const app = express()
const PORT = 3001

app.use(express.json())

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  ConnectDb()
  console.log(`server is running on port no ${PORT}`)
})