import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/connect.js';
import bodyParser from 'body-parser';
import ora from 'ora';
import notFound from './errors/not-found.js';
import errorMiddleware from './errors/error-handler.js';
import authRouter from './routes/auth.js';
import jobsRouter from './routes/jobs.js';
import authenticationMiddleware from './middleware/authentications.js';
// security  packages to help us protect our API for attackers.
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import  rateLimit  from 'express-rate-limit';
const app = express();
app.use(rateLimit());
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.set('trust proxy', 1);
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
// extra package
//routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs',jobsRouter);
app.use(bodyParser.urlencoded({extended:true}));
app.get('/:/hello', (req, res) => {
 res.send('Jobs API.');
})
app.use(notFound);
app.use(errorMiddleware);
const  PORT = process.env.PORT || 5000;
const spinner = ora('Loading the server').start();
setTimeout(() => {
 spinner.color = 'yellow';
 spinner.text = 'Loading the dev server';
}, 1000);
const start = async() => {
 try {
  return await connectDB(process.env.MUNGO_URISTRING),
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
 } catch(error) {
  console.log({msg:error});
 }
}
start();