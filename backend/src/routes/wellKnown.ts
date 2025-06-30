import { Router, Request, Response } from 'express';

const router = Router();

// Discovery endpoint
router.get('/.well-known/openid-configuration', (req: Request, res: Response) => {
  res.json({
    issuer: "http://localhost:4000",
    authorization_endpoint: "http://localhost:4000/auth/authorize",
    token_endpoint: "http://localhost:4000/auth/token",
    userinfo_endpoint: "http://localhost:4000/auth/userinfo",
    jwks_uri: "http://localhost:4000/.well-known/jwks.json",
    response_types_supported: ["code"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256"]
  });
});

// JWKS endpoint
router.get('/.well-known/jwks.json', (req: Request, res: Response) => {
  res.json({
    keys: [] // TODO: Implement JWKS generation
  });
});

export default router;
