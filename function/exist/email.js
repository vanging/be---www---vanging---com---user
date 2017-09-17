const util = require('../../lib/util');

module.exports= async function(email)
{
    const model_profile = await require('../../lib/persistence/model/profile')();
    if( ! util.isEmail(email))
    {
        return false;
    }
    const profile = await model_profile.findOne({ where: {email: email}});
    return profile !== null;
};