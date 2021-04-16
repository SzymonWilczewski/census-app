import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import * as service from "./service";

export const add = asyncHandler(async (req: Request, res: Response) => {
  const survey = await service.add(req.body);
  res.send({ survey });
});

export const getAll = asyncHandler(async (req: Request, res: Response) => {
  const surveys = await service.getAll();
  res.send({ surveys });
});

export const getById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const survey = await service.getById(parseInt(id));
  res.send({ survey });
});

export const update = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const survey = await service.update(parseInt(id), req.body);
  res.send({ message: "updated", survey });
});

export const seed = asyncHandler(async (req: Request, res: Response) => {
  await service.seed();
  res.send({ message: "seeded" });
});

export const statistics = asyncHandler(async (req: Request, res: Response) => {
  const statistics = await service.statistics();
  res.send({ statistics });
});