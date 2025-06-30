import { Router, Request, Response } from 'express';

const router = Router();

router.get('/profile', (req: Request, res: Response) => {
  // TODO: Verify token, return user info
  return res.json({ message: 'User profile endpoint placeholder' });
});

export default router;
