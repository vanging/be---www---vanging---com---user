const util = require('../../../lib/util');
const persistence = require('../../../lib/persistence/action');
const login = require('../../../lib/cache/action/login');
const koa = require('../../../koa');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! query.account || ! query.password)
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    const uid = await persistence.signInByPassword(query.account, query.password);
    if(uid)
    {
        ctx.body =
            {
                status: 'ok',
                message: await login.getSessionFromUid(uid)
            };
    }
    else
    {
        ctx.body =
            {
                status: 'password_not_match',
            };
    }
};

const app = koa(module.exports, 60003);