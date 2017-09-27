const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport
(
    config.mail
);

module.exports = function(option)
{
    return new Promise(function(resolve, reject)
    {
        transporter.sendMail(option, function(err, info)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(info);
            }
        });
    });

};