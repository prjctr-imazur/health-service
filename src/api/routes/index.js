const Router = require('koa-router');

const health = require('./health');

const router = new Router();

health.register(router);

module.exports = router;
