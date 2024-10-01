import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env); // This enables dynamic interpolation of environment variable in the .env file

const config = {
  app: {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
  },
  db: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    url: process.env.POSTGRES_URL,
  },
};

export default config;
