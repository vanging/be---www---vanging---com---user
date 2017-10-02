const util = require('../../lib/util');
const persistence = require('../../lib/persistence/action');
const koa = require('../../koa');
const _email = require('../../lib/cache/action/activate/email');
const port = require('../port');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! (query.session))
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    const email = await _email.getEmailFromSession(query.session);
    if(email === null)
    {
        ctx.body =
            {
                status: 'session_expired',
            };
    }
    else
    {
        await persistence.activateEmail(email);
        await _email.deleteSession(query.session);
        ctx.body =
            {
                status: 'ok',
            };
    }
};

const app = koa(module.exports, port.activate.email);