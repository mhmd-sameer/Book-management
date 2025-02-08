const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true});
        console.log("mongoDB connected");
    }
    catch(err){
        console.log("MongoDB connection error",err.message);
        process.exit(1);
    }
};
module.exports = connectDB;