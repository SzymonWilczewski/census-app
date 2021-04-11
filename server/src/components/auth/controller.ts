import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import createError from "http-errors";
import * as service from "./service";

export const login = asyncHandler(async (req: Request, res: Response) => {
  const user = await service.login(req.body);
  req.session.sessionId = user.id;
  res.send({ message: "logged in", user });
});

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { password, passwordConfirmation } = req.body;
  if (password !== passwordConfirmation) {
    throw createError(401, "password doesn't match with password confirmation");
  }
  const user = await service.register(req.body);
  res.send({ message: "registered", user });
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) throw createError(500, err);
    res.send({ message: "logged out" });
  });
});

export const isAuth = asyncHandler(async (req: Request, res: Response) => {
  const user = await service.getUserById(req.session.sessionId);
  res.send({ message: "authenticated", user });
});
