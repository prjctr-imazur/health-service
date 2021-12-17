const packageJson = require('../../package.json');

class ConfigService {
  get name() {
    return packageJson.name;
  }

  get version() {
    return packageJson.version;
  }

  get host() {
    return process.env.HOST;
  }

  get port() {
    return process.env.PORT;
  }

  get logLevel() {
    return process.env.LOG_LEVEL;
  }
}

const configService = (function loadConfigService() {
  return new ConfigService();
  // eslint-disable-next-line prettier/prettier
}());

module.exports = configService;
