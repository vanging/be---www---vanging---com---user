const util = require('../../lib/util');
const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! (query.email && util.isEmail(query.email)))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    if(await persistence.findUidByEmail(query.email) === null)
    {
        ctx.body =
            {
                status: 'ok',
                message: false
            };
    }
    else
    {
        ctx.body =
            {
                status: 'ok',
                message: true
            };
    }
};

const app = koa(module.exports, 61310);