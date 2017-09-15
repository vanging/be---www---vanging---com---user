const validator = require('validator');

module.exports.isEmail = function(email)
{
    return validator.isEmail(email);
};

module.exports.isTel = function(tel)
{
    return validator.isMobilePhone(tel, 'any');
};