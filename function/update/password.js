const session = require('../../middleware/login/session');
const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');
const port = require('../port');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! (query.password))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    try
    {
        await persistence.updatePassword(query.password, ctx.state.uid);
        ctx.body =
            {
                status: 'ok',
            };
    }
    catch(e)
    {
        console.log(e);
        ctx.body =
            {
                status: 'db_error'
            }
    }
};

const app = koa(module.exports, port.update.password, [session]);