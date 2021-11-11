module.exports = async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    const { message } = err;

    const code = err?.code ?? err?.status ?? 500;

    ctx.throw(code, message);
  }
};
