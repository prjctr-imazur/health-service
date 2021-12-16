const packageJson = require('../../package.json');

class ConfigService {
  get name() {
    return packageJson.name;
  }

  get version() {
    return packageJson.version;
  }

  get host() {
    return process.env.host;
  }

  get port() {
    return process.env.port;
  }

  get logLevel() {
    return process.env.logLevel;
  }
}

const configService = (function loadConfigService() {
  return new ConfigService();
  // eslint-disable-next-line prettier/prettier
}());

module.exports = configService;
