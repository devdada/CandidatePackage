import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Authorization endpoint TODO: implement PKCE, state, nonce, consent screen
router.get('/authorize', (req: Request, res: Response) => {
  res.json({
    message: 'Authorization endpoint - TODO: Implement PKCE, state, nonce, consent screen.'
  });
});

// Token endpoint TODO: support authorization code flow fully, include refresh tokens
router.post('/token', (req: Request, res: Response) => {
  const userId = uuidv4();

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

// UserInfo endpoint TODO: fetch real user claims from DB
router.get('/userinfo', (req: Request, res: Response) => {
  res.json({
    sub: "1234",
    name: "Test User",
    email: "testuser@example.com"
  });
});

export default router;
