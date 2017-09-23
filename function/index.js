const koa = require('../koa');

module.exports = async function(ctx, next)
{
    ctx.body =
        {
            status: 'ok',
            message: 'it works',
        };
};

const app = koa(module.exports, 60000);