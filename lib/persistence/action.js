const Auth = require('./model/auth')();


module.exports.signUpByEmail = function(email, password)
{

};

module.exports.signInByPassword = function()
{

};

module.exports.findUidByUsername = async function(account)
{
    const Profile = await require('./model/profile')();
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
    const Profile = await require('./model/profile')();
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
    const Profile = await require('./model/profile')();
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