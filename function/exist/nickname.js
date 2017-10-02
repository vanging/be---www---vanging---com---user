const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');
const port = require('../port');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! (query.nickname))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    if(await persistence.findUidByNickname(query.nickname) === null)
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

const app = koa(module.exports, port.exist.nickname);