const Koa = require('koa');

module.exports = function(func, port)
{
    const app = new Koa();

    app.use(async function()
    {

    });

    app.listen(port);

    return app;
};