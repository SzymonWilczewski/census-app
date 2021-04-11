import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

// https://github.com/expressjs/session/issues/792#issuecomment-726004985
declare module "express-session" {
  interface Session {
    sessionId: number;
  }
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session || !req.session.sessionId) {
    throw createError(401);
  }
  next();
}