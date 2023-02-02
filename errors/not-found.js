import { StatusCodes } from "http-status-codes";
const notFound = async(req, res, next) => {
 try{
  return await res.status(StatusCodes.NOT_FOUND).json({msg:'Something went wrong. Plese, try again.'});
 }catch(error) {
  console.log({msg:error});
 }
}
export default notFound;