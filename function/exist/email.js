const util = require('../../lib/util');

module.exports.handler = function(event, context, callback)
{
    console.log('invalid_path');
    callback(null, 'invalid_path');
};