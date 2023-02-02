import taskSchema from '../models/User.js';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
    // check header
  if (!authHeader || !authHeader.startsWith('Bearer')) {
   return res.status(StatusCodes.UNAUTHORIZED).json({msg:'Authentication invalid'});
  }
  const token = authHeader.split(' ')[1]

  try {
   const payload = jwt.verify(token, process.env.JWT_SECRET)
   // attach the user to the job 
   const user = taskSchema.findById(payload.id).select('-password')
   req.user = user;
   req.user = { userId: payload.userId, name: payload.name }
   next()
  } catch (error) {
   return res.status(StatusCodes.UNAUTHORIZED).json({msg:'Authentication invalid'});
  }
}

export default authenticationMiddleware;