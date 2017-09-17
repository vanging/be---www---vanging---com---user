const login = require('../../../../lib/cache/action/login');
const getSessionFromUid = login.getSessionFromUid;
const getUidFromSession = login.getUidFromSession;

describe('[ lib/cache/action/login ]', function()
{
    it('getSessionFromUid()', function()
    {
        return getSessionFromUid(`test:${Math.random()}`);
    });
    it('getUidFromSession()', function()
    {
        return getUidFromSession(`test:${Math.random()}`);
    });
});