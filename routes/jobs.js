import express from 'express';
import { getAllJobs, getJob, createJob, updateJob, deleteJob } from '../controllers/jobs.js'
const router = express.Router();
router.get(getAllJobs);
router.route('/:id').get(getJob).post(createJob).patch(updateJob).delete(deleteJob);
export default router;