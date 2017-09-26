const validator = require('validator');

module.exports.isEmail = function(email)
{
    return validator.isEmail(email);
};

module.exports.isTel = function(tel)
{
    return validator.isMobilePhone(tel, 'any');
};

module.exports.generateUid = function()
{
    function r()
    {
        let r = Math.random()*1e20;
        while(r < 1e19)
        {
            r = r*10;
        }
        return r.toString(36);
    }

    let t = new Date().getTime().toString(36);

    return `${t}-${r()}-${r()}`
};