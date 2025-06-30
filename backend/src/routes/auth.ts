import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// authorization endpoint 
router.get('/authorize', (req: Request, res: Response) => {
  res.json({
    message: 'Authorization endpoint - TODO: Implement PKCE, state, nonce, and consent screen.'
  });
});

// token endpoint 
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

// UserInfo endpoint
router.get('/userinfo', (req: Request, res: Response) => {
  res.json({
    sub: "1234",
    name: "Test User",
    email: "testuser@example.com"
  });
});

// OpenID Connect Discovery endpoint
router.get('/.well-known/openid-configuration', (req: Request, res: Response) => {
  res.json({
    issuer: "http://localhost:4000",
    authorization_endpoint: "http://localhost:4000/authorize",
    token_endpoint: "http://localhost:4000/token",
    userinfo_endpoint: "http://localhost:4000/userinfo",
    jwks_uri: "http://localhost:4000/.well-known/jwks.json",
    response_types_supported: ["code"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256"]
  });
});

// JWKS endpoint 
router.get('/.well-known/jwks.json', (req: Request, res: Response) => {
  res.json({
    keys: [] // TODO: Implement JWKS generation and rotation
  });
});

export default router;
