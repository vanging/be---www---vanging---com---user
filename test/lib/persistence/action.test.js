const action = require('../../../lib/persistence/action');
const assert = require('assert');
describe('[ lib/persistence/action ]', function()
{
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