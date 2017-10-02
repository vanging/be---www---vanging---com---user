const util = require('../../lib/util');
const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');
const port = require('../port');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! (query.username))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    if(await persistence.findUidByUsername(query.username) === null)
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

const app = koa(module.exports, port.exist.username);