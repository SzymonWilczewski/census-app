import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

export default function validator(schema: any) {
  return function validate(req: Request, res: Response, next: NextFunction) {
    const { error } = schema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  };
}