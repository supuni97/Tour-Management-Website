import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user registration
export const register = async(req,res)=>{

    try {

        //hashing password
        const salt = bcrypt.genSaltSync(10);        
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hash,
            photo:req.body.photo

        })

        await newUser.save()

        res.status(200).json({success:true,message:"success"})
        
    } catch (err) {
        res.status(500).json({success:false,message:"fail", error: err.message})

    }
}

//user login
export const login = async(req,res)=>{
   
    const email= req.body.email
   
    try {

      const user = await User.findOne({email})

      //if user doesn't exist
      if(!user){
        return res.status(404).json({success:false,message:"User not found"})
      }

      //if user exists
      const checkCorrectPW = bcrypt.compare(req.body.password, user.password )
        
      //if pw is incorrect
      if(!checkCorrectPW){
        return res.status(401).json({success:false,message:"Incorrect email or password"})
      }

      const {password,role,...rest} = user._doc

      //jwt token
      const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn:'15d'});

      res.cookie('accessToken',token,{
        httpOnly:true,
        expires:token.expiresIn
      }).status(200).json({success:true,message:"Successfully login", data:{...rest}})

    } catch (err) {
        res.status(500).json({success:false,message:"Failed to login"})
    }
}