const axios = require('axios');
const { name, version } = require('../../../package.json');

class HealthController {
  services = [
    {
      name: 'video-service',
      url: 'http://127.0.0.1:3000/health',
    },
    {
      name: 'user-service',
      url: 'http://127.0.0.1:3001/health',
    },
    {
      name: 'subscription-service',
      url: 'http://127.0.0.1:3002/health',
    },
    {
      name: 'subscription-service',
      url: 'http://127.0.0.1:3002/health',
    },
    {
      name: 'history-service',
      url: 'http://127.0.0.1:3003/health',
    },
  ];

  async handle() {
    const promises = this.services.map(({ url }) => axios.get(`${url}`));

    const results = await Promise.allSettled(promises);

    const statuses = results.map((result, index) => {
      const { name: serviceName, url: serviceUrl } = this.services[index];

      return {
        serviceName,
        serviceUrl,
        status: result.status === 'fulfilled' ? 'Ok' : 'Failure',
      };
    });

    return { name, version, statuses };
  }
}

module.exports = HealthController;
