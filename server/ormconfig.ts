import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: process.env.NODE_ENV === "dev",
  entities: ["src/entity/**/*.ts"],
};

export = config;