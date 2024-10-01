import app from "./app.js";
import { connectDB } from "./config/db.config.js";
import config from "./config/env.config.js";
import logger from "./utils/logger.js";

const startServer = async () => {
  const port = config.app.port || 3000;
  await connectDB();
  app.listen(port, () => {
    logger.info(`🚀 Server successfully started on port ${port} with PID: ${process.pid}`)
  });
};

startServer();
