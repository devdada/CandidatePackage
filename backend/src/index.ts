import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth';
import userRoutes from './routes/user';

dotenv.config(); // Make sure this runs FIRST

const app = express();

app.use(cors());
app.use(express.json());

// Mount routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
