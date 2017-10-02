const session = require('../../../middleware/login/session');
const persistence = require('../../../lib/persistence/action');
const koa = require('../../../koa');
const port = require('../../port');

module.exports= async function(ctx)
{
    try
    {
        const profile = await persistence.findProfileFromUid(ctx.state.uid);
        ctx.body =
            {
                status: 'ok',
                message: profile
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

const app = koa(module.exports, port.sign.in.github, [session]);