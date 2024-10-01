import { createLogger, format, transports } from "winston";
import { consoleFormat } from "winston-console-format";

const consoleTransportOptions = {
  handleExceptions: true,
  format: format.combine(
    format.colorize({ all: true }),
    format.padLevels(),
    consoleFormat({
      showMeta: true,
    })
  ),
};

const createComponentLogger = () =>
  createLogger({
    level: "info",
    format: format.combine(
      format.timestamp(),
      format.errors({ stack: true }),
      format.splat(),
      format.json()
    ),
    transports: [new transports.Console(consoleTransportOptions)],
  });

export const logger = createComponentLogger();

export default logger;
