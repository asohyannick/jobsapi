import asyncWrapper from '../middleware/async.js';
import { StatusCodes } from 'http-status-codes';
import jobsAPI from '../models/job.js';

export const getAllJobs = asyncWrapper(async(req, res) => {
res.send('get all jobs!');
});

export const getJob = asyncWrapper(async(req, res) => {
res.send('get  job!');
});

export const createJob = asyncWrapper(async(req, res) => {
req.body.createBy = req.user.userId
const job = await jobsAPI.create(req.body);
res.status(StatusCodes.CREATED).json({job});
});

export const updateJob = asyncWrapper(async(req, res) => {
res.send('update job!');
});

export const deleteJob = asyncWrapper(async(req, res) => {
 res.send('delete job!');
});