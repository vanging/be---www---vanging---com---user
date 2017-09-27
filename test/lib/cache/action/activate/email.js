const email = require('../../../../../lib/cache/action/activate/email');

describe('[ lib/cache/action/activate/email ]', function()
{
    let session = null;
    it('createSessionFromEmail()', async function()
    {
        session = await email.createSessionFromEmail(`test_email_${Math.random()}`);
        console.log(session);
        return session;
    });
    it('getEmailFromSession()', async function()
    {
        const _email = await email.getEmailFromSession(email.session2email(session));
        console.log(_email);
        return session;
    });
    it('deleteSession()', async function()
    {
        const result =  await email.deleteSession(email.session2email(session));
        console.log(result);
        return result;
    });
});