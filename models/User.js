import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
 name:{
  type:String,
  required:[true, 'Please provide your name'],
  minlength:6,
  maxlength:50,
 },
 email:{
  type:String,
  required:[true, 'Please provide your email'],
  match:[
   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email',
  ],
  unique:true
 },
 password:{
  type:String,
  required:[true, 'Please provide your password'],
  minlength:6,
 }
});

const taskSchema = new mongoose.model('userSchema', userSchema);
export default taskSchema;