const redis = require('../../../lib/cache/index');
const redislib = require('redis');

describe('[ lib/cache ]', function()
{
    it('getClient()', function(done)
    {
        const client = redis.getClient();
        client.set('test', 'test', function(err, res)
        {
            console.log(res);
            done();
        });
    });
});