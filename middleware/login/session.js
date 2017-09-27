const login = require('../../lib/cache/action/login');

module.exports= async function(ctx, next)
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
    const uid = await login.getUidFromSession(query.session);
    if(uid === null)
    {
        ctx.body =
            {
                status: 'session_not_found',
            };
    }
    else
    {
        ctx.state.uid = uid;
        next();
    }
};