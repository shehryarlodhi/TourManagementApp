const express=require ("express");
const uRoutes = require("./Routes/userRoutes");
const tRoutes = require("./Routes/tourRoutes");
const bRoutes = require("./Routes/bRoutes");
const cRoutes = require("./Routes/cRoutes");
const pRoutes = require("./Routes/pRoutes");
const app=express();
const stripe = require("stripe")("sk_test_51N5keOESFgqQlsyzUyepxrlBjulvqwPcMbWvWtfvvPVqvwRG6JZ2q18fUpNFHiV1WfJ24cOUmz6Gbb9C5aSyy44O000prjxjFi")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("dotenv").config();


app.use(cors(
    {
    origin:["https://tour-management-app-4dg4-sl3cqf9e8-shehryar-lodhis-projects.vercel.app"],
    methods:["POST","GET"],
    credentials:true
    }    
))
app.use(express.json())
const mongoose = require("mongoose"); 
app.use('/public', express.static(__dirname + '/public'));
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected")
}).catch(err=>{
   console.log(err) 
}) 

app.listen(process.env.PORT || 3001,()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})

app.use("/user",uRoutes); 
app.use("/tour",tRoutes); 
app.use("/tour",bRoutes); 
app.use("/customer",cRoutes);
app.use("/payment",pRoutes);  


