const session = require('../../middleware/login/session');
const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');
const util = require('../../lib/util');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! util.isEmail(query.email || ''))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    try
    {
        await persistence.updateEmail(query.email, ctx.state.uid);
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

const app = koa(module.exports, 61610, [session]);