const koa = require('../koa');

module.exports = async function(ctx, next)
{
    ctx.body =
        {
            status: 'ok',
            message: ctx.query,
        };
};

const app = koa(module.exports, 60000);