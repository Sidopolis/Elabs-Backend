import express from "express"
import dotenv from "dotenv"

import {connectDB} from "./db/connectDB.js"
import User from "./db/User.js"

dotenv.config()

const app = express()
app.use(express.json()) 

const PORT = process.env.PORT || 8000


// const connectDB = () => {
//     mongoose.connect(MONGO_URL)
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.log(err))
// }

connectDB()

// const logger = (req,res,next) => {
//       console.log(req.url)
//       next()   
    
// }

// app.use(logger)


app.post("/create", async (req, res) => {

    const name = req.body.name;
    const age = req.body.age

    if(!name || !age) {
        return res.status(400).json({
            msg: "Please provide name and age"
        })
    }

    try {
       const newUser = new User({
        name,
        age,
    });

    User.find

    const user = await newUser.save();

    return res.status(201).json({
        msg : "User created sucessfully",
        user
    });
     
   } catch(error) {
     return res.status(500).json({
        msg: "Something went wrong"
     })

   }
})

app.get("/users", async (req, res)=> {
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

