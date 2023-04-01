import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()
app.use(express.json()) 

const PORT = process.env.PORT || 8000
const MONGO_URL= process.env.MONGO_URL

const connectDB = () => {
    mongoose.connect(MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))
}

connectDB()

const logger = (req,res,next) => {
      console.log(req.url)
      next()   
    
}

// app.use(logger)


app.get("/", (req, res) => {
    res.json(req.query)
})

app.get("/hello", (req, res) => {
    res.send("this is the hello page")
})

app.get("/user/:name/:id", (req, res) => {
    res.json(req.params)
})

app.post("/get-user", (req, res) => {
    const name= req.body.name
    res.send(`Hello ${name}`)
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

