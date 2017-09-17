module.exports= async function(username)
{
    const model_profile = await require('../../lib/persistence/model/profile')();

    const profile = await model_profile.findOne({ where: {username: username}});
    return profile !== null;
};