import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

export default function validator(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { userId, ...body } = req.body;
    const { error } = schema.validate(body);
    if (error) {
      throw createError(400, error.message);
    } else {
      next();
    }
  };
}
