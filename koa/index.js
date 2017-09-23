const Koa = require('koa');

module.exports = function(func, port, middlewares = [])
{
    const app = new Koa();

    middlewares.forEach(function(e)
    {
        app.use(e);
    });

    app.use(func);

    app.listen(port);
    console.log(`app listening at : http:localhost:${port}`);

    app.on('error', function(err, ctx)
    {
        console.log('server error:');
        console.log(err);
        console.log(ctx);
    });

    return app;
};