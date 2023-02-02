import mongoose from "mongoose";
import asyncWrapper from '../middleware/async.js';
import { StatusCodes } from 'http-status-codes';
const connectDB = async(url) => {
 mongoose.set('strictQuery', false);
 return await mongoose.connect(url,{
  useNewUrlParser:true
 }).then(() => console.log()).catch((error) => console.log({msg:error}));
};
export default connectDB;