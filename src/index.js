require('./bootstrap');

const Koa = require('koa');

const configService = require('./services/ConfigService');
const loggerService = require('./services/LoggerService');
const router = require('./api/routes');
const errorHandler = require('./api/middleware/errorHandler');
const loggerHandler = require('./api/middleware/loggerHandler');

const config = {
  host: configService.host,
  port: configService.port,
};

const app = new Koa();

app.use(errorHandler);

app.use(loggerHandler);

app.use(router.routes());

app.use(router.allowedMethods());

app.listen(config.port, () => {
  loggerService.info(
    `App is listening on http://${config.host}:${config.port}`
  );
});
