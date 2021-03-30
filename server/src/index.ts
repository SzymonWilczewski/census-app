import express, {Request, Response} from "express";
import morgan from "morgan";
import helmet from "helmet";
import { Client } from "pg";

async function main() {
  const app = express();
  app.use(express.json());
  app.use(helmet());

  if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"));
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  app.get("/", async (req: Request, res: Response) => {
    const result = await client.query("SELECT $1::text as message", [
      "Hello world!",
    ]);
    res.send({
      message: result.rows[0].message,
    });
  });

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
}

main();