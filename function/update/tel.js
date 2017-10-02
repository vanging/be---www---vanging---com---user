const session = require('../../middleware/login/session');
const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');
const util = require('../../lib/util');
const port = require('../port');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! util.isTel(query.tel))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    try
    {
        await persistence.updateTel(query.tel, ctx.state.uid);
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

const app = koa(module.exports, port.update.tel, [session]);