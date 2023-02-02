import asyncWrapper from '../middleware/async.js';
import { StatusCodes } from 'http-status-codes';
import taskSchema from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = asyncWrapper(async(req, res) => {
 const {name, email, password } = req.body;
 // hashing our password using bcrypt
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password,salt);
 const tempUser = {name,email,password:hashedPassword};
 const task = await taskSchema.create({...tempUser});
 res.status(StatusCodes.CREATED).json({task});
 // jwt functionalities
 const user = await taskSchema.create(...req.body);
 const token = jwt.sign({userId:user._id,name: user.name},process.env.JWT_SECRET, {
  expiresIn:process.env.JWT_LIFETIME,
 });
 res.status(StatusCodes.CREATED).json({msg:'user created', token});

});


export const login = asyncWrapper(async(req, res) => {
 const { email, password } = req.body
 if(!email || !password) {
  return res.status(StatusCodes.BAD_REQUEST).json({msg:' Please provide email and password'});
 }
 const newTask  = await taskSchema.findOne({ email });
 if(!newTask) {
  return res.status(StatusCodes.UNAUTHORIZED).json({msg:'Invalid Credentials'});
 }
 // compared password
 bcrypt.compare(password, user.password, function(){
  if(!password){
   return res.status(StatusCodes.UNAUTHORIZED).json({msg:'Invalid Credentials'});
   }
   if (password) {
      return res.status(StatusCodes.OK).json({ msg: "Login success" })
  } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credencial" })
  }
 })
 // JWT functionalities
 const token = jwt.sign({userId:user._id,name: user.name},process.env.JWT_SECRET, {
  expiresIn:process.env.JWT_LIFETIME,
 });
 res.status(StatusCodes.OK).json({msg:{name:user.name}, token});
});