import User from "../models/user.model.js"
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const deleteUser=async(req,res)=>{

    const user=await User.findById(req.params.id);

    // const token=req.cookies.accessToken;
    // if(!token)return res.status(401).send("You are not authenticated");

    // jwt.verify(token,process.env.JWT_SECRET,async (err,payload)=>{
    if(req.userId!==user._id.toString()){
        // return res.status(403).send("You can only delete your account");
        return next(createError(403,"you can only delete your account"));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");
    // })

}

export const getUser=async(req,res)=>{
    const user=await User.findById(req.params.id);
    res.status(200).send(user);
}