import mongoose from "mongoose";
const jobTask = new mongoose.Schema({
company: {
 type:String,
 required:[true, 'Please provide company name'],
 maxlength:50
}, 
position: {
 type:String,
 required:[true, 'Please provide position'],
 maxlength:100
},
status: {
 type:String,
 enum:['interview', 'declined', 'pending'],
 default:'pending',
},
createdBy: {
 type:mongoose.Types.ObjectId,
 ref: 'user',
 required:[true, 'Please provide user']
}
}, {timestamps:true});

const jobsAPI = new mongoose.model('jobTask', jobTask);
export default jobsAPI;