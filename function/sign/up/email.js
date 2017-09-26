const util = require('../../../lib/util');
const persistence = require('../../../lib/persistence/action');
const koa = require('../../../koa');

module.exports= async function(ctx)
{
    const query = ctx.query;
    if( ! (query.email && util.isEmail(query.email)) || ! query.password)
    {
        ctx.body =
            {
                status: 'param_wrong'
            };
        return;
    }
    try
    {
        const result = await persistence.signUpByEmail(query.email, query.password);
        ctx.body =
            {
                status: 'ok',
                message: result
            };
    }
    catch(e)
    {
        console.log(e);
        ctx.body =
            {
                status: 'fail',
                message: 'db insert record fail'
            };
    }
};

const app = koa(module.exports, 60004);