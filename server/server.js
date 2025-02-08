const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./Routes/bookRoutes");

const app = express();

require("dotenv").config();

app.use(express.json());

app.use("/Book",bookRoutes);

connectDB();

app.get('/',(req,res)=>{
    res.send("default page url");
})


const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})