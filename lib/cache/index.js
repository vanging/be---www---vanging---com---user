const redis = require('redis');
const config = require('../config');

function getClient()
{

    const client = redis.createClient(config.redis);
    return client;
}

module.exports.getClient = getClient;