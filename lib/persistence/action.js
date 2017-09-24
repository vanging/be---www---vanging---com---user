let Profile;
let Auth;

module.exports.signUpByEmail = async function(email, password)
{

};

module.exports.signInByPassword = async function(account, password)
{
    const uid = await module.exports.findUidByAccount(account);
    if( ! uid)
    {
        return false;
    }
    Auth = Auth || await require('./model/auth')();
    const auth = Auth.findOne
    (
        {
            where:
                {
                    uid: uid,
                    password: password,
                }
        }
    );
    return auth !== null;
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
    console.log(uid);
    if(uid)
    {
        return uid;
    }
    uid = await module.exports.findUidByUsername(account);
    console.log(uid);
    if(uid)
    {
        return uid;
    }
    uid = await module.exports.findUidByTel(account);
    console.log(uid);
    return uid;
};