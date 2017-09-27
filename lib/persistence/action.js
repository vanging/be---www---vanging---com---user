let Profile;
let Auth;
const util = require('../../lib/util');

module.exports.activateEmail = async function(email)
{
    Profile = Profile || await require('./model/profile')();
    const result = await Profile.update
    (
        {
            email_verified: true
        },
        {
            where:
                {
                    email: email,
                }
        }
    );
    // console.log(result[0]);
    return result;
};

module.exports.signUpByEmail = async function(email, password)
{
    Auth = Auth || await require('./model/auth')();
    Profile = Profile || await require('./model/profile')();

    return new Promise(function(resolve, reject)
    {
        Profile.sequelize.transaction(function(t)
        {
            const uid = util.generateUid();
            return Auth.create
            (
                {
                    uid: uid,
                    password: password,
                },
                {
                    transaction: t,
                }
            ).then(function()
            {
                return Profile.create
                (
                    {
                        uid: uid,
                        email: email,
                    },
                    {
                        transaction: t,
                    }
                );
            });
        }).then(function(result)
        {
            resolve(result);
        }).catch(function(err)
        {
            reject(err);
        });
    });
};

module.exports.signInByPassword = async function(account, password)
{
    const uid = await module.exports.findUidByAccount(account);
    if( ! uid)
    {
        return false;
    }
    Auth = Auth || await require('./model/auth')();
    const auth = await Auth.findOne
    (
        {
            where:
                {
                    uid: uid,
                    password: password,
                }
        }
    );
    if(auth === null)
    {
        return false;
    }
    else
    {
        return uid;
    }
};

module.exports.findUidByUsername = async function(account)
{
    Profile = Profile || await require('./model/profile')();
    let profile = await Profile.findOne
    (
        {
            where:
                {
                    username: account,
                },
            attributes:
                [
                    'uid'
                ],
        }
    );
    // console.log(profile.dataValues.uid);
    if(profile)
    {
        return profile.dataValues.uid;
    }
    else
    {
        return null;
    }
};

module.exports.findUidByEmail = async function(email)
{
    Profile = Profile || await require('./model/profile')();
    let profile = await Profile.findOne
    (
        {
            where:
                {
                    email: email,
                },
            attributes:
                [
                    'uid'
                ],
        }
    );
    // console.log(profile.dataValues.uid);
    if(profile)
    {
        return profile.dataValues.uid;
    }
    else
    {
        return null;
    }
};

module.exports.findUidByTel = async function(tel)
{
    Profile = Profile || await require('./model/profile')();
    let profile = await Profile.findOne
    (
        {
            where:
                {
                    tel: tel,
                },
            attributes:
                [
                    'uid'
                ],
        }
    );
    // console.log(profile.dataValues.uid);
    if(profile)
    {
        return profile.dataValues.uid;
    }
    else
    {
        return null;
    }
};

module.exports.findUidByAccount = async function(account)
{
    let uid = await module.exports.findUidByEmail(account);
    if(uid)
    {
        return uid;
    }
    uid = await module.exports.findUidByUsername(account);
    if(uid)
    {
        return uid;
    }
    uid = await module.exports.findUidByTel(account);
    return uid;
};