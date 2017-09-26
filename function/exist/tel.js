const util = require('../../lib/util');
const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! (query.tel && util.isTel(query.tel)))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    if(await persistence.findUidByTel(query.tel) === null)
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

const app = koa(module.exports, 60005);