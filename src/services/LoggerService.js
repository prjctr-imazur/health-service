const winston = require('winston');

const configService = require('./ConfigService');

function loggerServiceInstance() {
  const logger = winston.createLogger({
    level: configService.get('APP_LOG_LEVEL'),
    defaultMeta: {
      service: configService.get('name'),
      version: configService.get('version'),
    },
    transports: [
      new winston.transports.Console({
        format: winston.format.json(),
      }),
    ],
  });

  return logger;
}

module.exports = loggerServiceInstance();
