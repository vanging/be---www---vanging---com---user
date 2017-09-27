const transporter = require('../../index');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../html/sign/up.html')).toString();

const option =
    {
        from: 'VanGing<admin@notice.vanging.com>',
        to: null,
        subject: 'sign up vanging',
        html: null,
    };

module.exports = function(email, session)
{
    const body = html.replace('{{session}}', session);
    option.to = email;
    option.html = body;
    return transporter(option);
};