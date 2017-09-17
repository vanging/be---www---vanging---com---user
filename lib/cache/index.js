const redis = require('redis');
const password = require('../password');

function getClient()
{

    const client = redis.createClient(password.redis);
    return client;
}

module.exports.getClient = getClient;