import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Example: GET /auth/authorize
router.get('/authorize', (req: Request, res: Response) => {
  res.json({ message: 'Auth endpoint placeholder' });
});

// Example: POST /auth/token
router.post('/token', (req: Request, res: Response) => {
  const userId = uuidv4();

  // Ensure you have JWT_SECRET loaded
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: 'JWT_SECRET is not defined' });
  }

  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

export default router;
