import express, { NextFunction, Request, Response } from "express";
import { createConnection, Connection } from "typeorm";
import morgan from "morgan";
import helmet from "helmet";
import asyncHandler from "express-async-handler";
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
      if (Math.random() > 0.5) throw Error("error");
      res.send({ message: "healtcheck" });
    })
  );

  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });

  app.use(({ message, stack }: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ error: message, status: res.statusCode });
  });
});
