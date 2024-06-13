import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import gigRoute from "./routes/gig.route.js"
import orderRoute from "./routes/order.route.js"
import conversationRoute from "./routes/conversation.route.js"
import messageRoute from "./routes/message.route.js"
import reviewRoute from "./routes/review.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

const app=express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

try{
    // console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb")
}catch(err){
    console.log(err);
}

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);
app.use("/api/reviews",reviewRoute);

app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errorMessage=err.message||"Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
})

app.listen(8000,()=>{
    console.log(`Backend server is running on port ${8000}`)
})