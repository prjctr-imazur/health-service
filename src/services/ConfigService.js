const packageJson = require('../../package.json');

class ConfigService {
  storages = [process.env, packageJson];

  has(property) {
    return this.storages.some((o) => {
      const hasProperty = Object.prototype.hasOwnProperty.call(o, property);
      return hasProperty;
    });
  }

  get(property) {
    for (let i = 0; i <= this.storages.length; i += 1) {
      const value = this.storages[i][property];
      if (value !== undefined) {
        return value;
      }
    }
    return undefined;
  }
}

function configServiceInstance() {
  return new ConfigService();
}

module.exports = configServiceInstance();
