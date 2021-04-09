import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import createError from "http-errors";
import * as service from "./service";

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { login, password } = req.body;
  const user = await service.login(login, password);
  req.session.sessionId = user.id;
  res.send({ message: "logged in", user });
});

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, login, password } = req.body;
  const user = await service.register(email, login, password);
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
