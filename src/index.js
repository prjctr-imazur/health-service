const Koa = require('koa');

const router = require('./api/routes');
const errorHandler = require('./api/middleware/errorHandler');

const config = { host: '127.0.0.1', port: 3004 };

const app = new Koa();

app.use(errorHandler);

app.use(router.routes());

app.use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`App is listening on http://${config.host}:${config.port}`);
});
