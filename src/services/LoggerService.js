const winston = require('winston');

const configService = require('./ConfigService');

class LoggerService {
  constructor(config) {
    this.bootstrap(config);
  }

  bootstrap(config) {
    this.logger = winston.createLogger({
      level: config.logLevel,
      defaultMeta: {
        service: config.name,
        version: config.version,
      },
      transports: [
        new winston.transports.Console({
          format: winston.format.json(),
        }),
      ],
    });
  }

  debug(...args) {
    this.logger.debug(...args);
  }

  info(...args) {
    this.logger.info(...args);
  }

  warn(...args) {
    this.logger.warn(...args);
  }

  error(...args) {
    this.logger.error(...args);
  }
}

const loggerService = (function loadLoggerService() {
  return new LoggerService(configService);
  // eslint-disable-next-line prettier/prettier
}());

module.exports = loggerService;
