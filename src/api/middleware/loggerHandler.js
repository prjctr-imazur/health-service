const loggerService = require('../../services/LoggerService');

module.exports = async function loggerHandler(ctx, next) {
  const { method, url } = ctx.request;

  const payload = { method, url };

  const start = Date.now();

  try {
    await next();
  } finally {
    const end = Date.now();
    const duration = end - start;

    loggerService.info({
      ...payload,
      status: ctx.response.status,
      start,
      end,
      duration: `${duration} ms`,
    });
  }
};
