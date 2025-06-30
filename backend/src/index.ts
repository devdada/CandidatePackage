import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 OIDC backend running on http://localhost:${port}`);
});
