const redis = require('../../index');
const client = redis.getClient();
const _email = require('../../../mail/action/activate/email');

const sessionTTL = 60 * 60 * 24;
const prefix = 'be.www.vanging.com.user.activate.email';

function session2email(session)
{
    return `${prefix}:session2email:${session}`;
}

function random()
{
    let str = '';
    while(str.length < 36)
    {
        str += (Math.random()*1e20).toString(36);
    }
    return str.slice(0, 36);
}

module.exports.session2email = session2email;
module.exports.createSessionFromEmail = async function(email)
{
    const session = random();
    await _email(email, session);
    await new Promise(function(resolve, reject)
    {
        client.set(session2email(session), email, 'EX', sessionTTL, function(err, res)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(session)
            }
        });
    });
};

module.exports.getEmailFromSession = function(session)
{
    return new Promise(function(resolve, reject)
    {
        client.get(session2email(session), function(err, res)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(res)
            }
        });
    });
};

module.exports.deleteSession = function(session)
{
    return new Promise(function(resolve, reject)
    {

        client.del(session2email(session), function(err, res)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(res)
            }
        });
    });
};