import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth';
import wellKnownRoutes from './routes/wellKnown'; // ✅ CORRECT

dotenv.config({ path: './.env' });

const app = express();

app.use(cors());
app.use(express.json());

// Mount well-known at root
app.use('/', wellKnownRoutes);

// Mount other routes
app.use('/auth', authRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
