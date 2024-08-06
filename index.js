import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Initialize dotenv configuration
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/', userRouter);

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
