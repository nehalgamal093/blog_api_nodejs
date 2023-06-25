import { userModel } from "../../../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken } from "../../utils/generateToken.js";
import Joi from 'joi'
import { signInSchema,signUpSchema } from "./user.validation.js";


export const signup = async (req,res)=>{
    const {name,email,password} = req.body;
    
        let user = await userModel.findOne({email})
    if(user){
        res.json({message:'Email Already exists'})
    } else {
        bcrypt.hash(password,Number(process.env.ROUND),async function (err,hash){
            await userModel.insertMany({name,email,password:hash});
            res.json({message:'Success'});
        })
      
    }
    
   
}

export const signin = async (req,res)=>{
    const {email,password} = req.body
    
        let user = await userModel.findOne({email});
    if(user){
        let match =  await bcrypt.compare(password,user.password);
        if(match){
        let token =generateToken({name:user.name,userId:user})
            res.json({message:'Logged In',token})
        } else {
            res.json({message:'Wrong password'})
        }
    } else {
        res.json({message:'User not found'})
    }
    
}