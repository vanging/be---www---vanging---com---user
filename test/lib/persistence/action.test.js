const action = require('../../../lib/persistence/action');
const assert = require('assert');
describe('[ lib/persistence/action ]', function()
{

    it('activateEmail()', async function()
    {
        assert(await action.activateEmail(`email`));
    });

    it('signUpByEmail()', async function()
    {
        assert(await action.signUpByEmail(`${Math.random()}-test-email`, `${Math.random()}-test-password`));
        try
        {
            await action.signUpByEmail(`test-email`, `test-password`);
            await action.signUpByEmail(`test-email`, `test-password`);
            assert(false);
        }
        catch(e)
        {
            console.log(e);
        }
    });

    it('signInByPassword()', async function()
    {
        this.timeout(20000);
        let ok = await action.signInByPassword('username', 'password');
        assert(ok);
        ok = await action.signInByPassword('email', 'password');
        assert(ok);
        ok = await action.signInByPassword('tel', 'password');
        assert(ok);
        ok = await action.signInByPassword('usernamee', 'password');
        assert( ! ok);
        ok = await action.signInByPassword('emaill', 'password');
        assert( ! ok);
        ok = await action.signInByPassword('tell', 'password');
        assert( ! ok);
        ok = await action.signInByPassword('null', 'password');
        assert( ! ok);
    });

    it('findUidByUsername()', async function()
    {
        const uid = await action.findUidByUsername('username');
        assert(uid === 'uid');
        const uid1 = await action.findUidByUsername('null');
        assert(uid1 === null);
    });

    it('findUidByEmail()', async function()
    {
        const uid = await action.findUidByEmail('email');
        assert(uid === 'uid');
        const uid1 = await action.findUidByEmail('null');
        assert(uid1 === null);
    });

    it('findUidByTel()', async function()
    {
        const uid = await action.findUidByTel('tel');
        assert(uid === 'uid');
        const uid1 = await action.findUidByTel('null');
        assert(uid1 === null);
    });

    it('findUidByAccount()', async function()
    {
        this.timeout(20000);
        const uid = await action.findUidByAccount('email');
        assert(uid === 'uid');
        const uid1 = await action.findUidByAccount('username');
        assert(uid1 === 'uid');
        const uid2 = await action.findUidByAccount('tel');
        assert(uid2 === 'uid');
        const uid3 = await action.findUidByAccount('null');
        assert(uid3 === null);
    });
});