import express, { Application, NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";
import redis from "redis";
import connectRedis from "connect-redis";
import authRouter from "./components/auth/auth.routes";

const server: Application = express();

if (process.env.NODE_ENV === "dev") {
  server.use(morgan("[:date[web]] :status :method :url :response-time ms"));
} else {
  server.set("trust proxy", 1);
}

server.use(express.json());
server.use(helmet());

server.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

server.use(
  session({
    secret: process.env.SESSION_SECRET || "",
    name: "session",
    cookie: {
      httpOnly: true,
      sameSite: true,
      secure: process.env.NODE_ENV !== "dev", // must be secure in production
      maxAge: 1000 * 60 * 60 * 24 * 7, // ms | s | m | h | d
    },
    store: new (connectRedis(session))({
      client: redis.createClient(process.env.REDIS_URL || ""),
      ttl: 86400,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

server.use("/auth", authRouter);

server.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, `endpoint at ${req.path} not found`));
});

server.use(
  (
    { message, status }: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res
      .status(status || 500)
      .send({ message, status: status || res.statusCode });
  }
);

export default server;