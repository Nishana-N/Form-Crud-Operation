const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

dotenv.config();



app.post("/api/hosting", async (req,res) => {
    const {name, email, password} = req.body;
    const user = new User({name, email, password})
    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (error) {
        console.log(error.message)
    }
});

app.get("/api/hosting/:id" , async(req,res) => {
    const {id} = req.params;
    try {
        const getId = await User.findById(id)
        res.json(getId);
    } catch (error) {
        console.log(error.message)
    }
} );

app.put("/api/hosting/:id" ,async (req,res) => {
    const {id}  = req.params;
    console.log(id)
    const {name, email,password} = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id,{$set:{name,email,password}},{new:true});
        res.status(201).json(updatedUser)
    } catch (error) {
        console.log(error.message)
    }
});

app.delete("/api/hosting/:id", (req,res) => {
    console.log(req.params.id);
    const deletedId = new mongoose.Types.ObjectId(req.params.id);
    mongoose.connection.collection('users').deleteOne({_id:deletedId});
    console.log("user deleted");
    res.send("user deleted successful")
})

const connect = async () => {
    try {
        await  mongoose.connect(process.env.MONGO_URL);
        console.log("DB CONNECTED")
    } catch (error) {
        const {status, message} = error;
        console.log(status,message)
    }
}

app.get("/api/hosting",async (req,res) => {
    try {
        const savedUser = await User.find()
        res.status(201).json(savedUser);
        console.log(savedUser)
    } catch (error) {
        console.log(error.message)
    }
})

app.get("*" ,(req,res) => {
    console.log("api  not found ")
})


app.listen(process.env.PORT, () =>{
    console.log(`App is running in ${process.env.PORT}`);
    connect();
})