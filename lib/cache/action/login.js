const redis = require('../index');
const client = redis.getClient();

const sessionTTL = 60 * 60 * 24 * 30;
const prefix = 'be.www.vanging.com.user.login';

function session2uid(session)
{
    return `${prefix}:session2uid:${session}`;
}

function uid2session(uid)
{
    return `${prefix}:uid2session:${uid}`;
}

function createSessionFromUid(uid)
{
    return new Promise(function(resolve, reject)
    {
        const session = random();

        client.set(session2uid(session), uid, 'EX', sessionTTL, function(err, res)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                client.set(uid2session(uid), session, 'EX', sessionTTL, function(err, res)
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
            }
        });
    });
}

function getSessionFromUid(uid)
{
    return new Promise(function(resolve, reject)
    {
        client.get(uid2session(uid), function(err, res)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                if(res === null)
                {
                    console.log(`login session not exist, creating new one...done`);
                    createSessionFromUid(uid)
                        .then(function(session)
                        {
                            resolve(session);
                        }, function(err)
                        {
                            reject(err);
                        })
                }
                else
                {
                    resolve(res);
                }
            }
        });
    });
}

function getUidFromSession(session)
{
    return new Promise(function(resolve, reject)
    {
        client.get(session2uid(session), function(err, res)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(res);
            }
        });
    });
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

module.exports.getSessionFromUid = getSessionFromUid;
module.exports.getUidFromSession = getUidFromSession;