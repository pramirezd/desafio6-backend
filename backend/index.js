import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});