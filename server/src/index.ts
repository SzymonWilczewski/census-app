import express, { NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";
import { createConnection, Connection } from "typeorm";
import asyncHandler from "express-async-handler";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

createConnection().then(async (connection: Connection) => {
  const port = process.env.PORT || 8080;
  const app = express();

  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  if (process.env.NODE_ENV === "dev") {
    app.use(morgan("[:date[web]] :status :method :url :response-time ms"));
  }

  app.get(
    "/",
    asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
      res.send({ message: "healtcheck" });
    })
  );

  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
  });

  app.use(
    (
      { message, status }: HttpError,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      res.status(status || 500).send({ message, status });
    }
  );
});
