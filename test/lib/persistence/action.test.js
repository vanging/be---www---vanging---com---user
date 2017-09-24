const action = require('../../../lib/persistence/action');
const assert = require('assert');
describe('[ lib/persistence/action ]', function()
{
    it('findUidByUsername()', async function()
    {
        const uid = await action.findUidByUsername('username');
        assert(uid === 'uid');
    });

    it('findUidByEmail()', async function()
    {
        const uid = await action.findUidByEmail('email');
        assert(uid === 'uid');
    });

    it('findUidByTel()', async function()
    {
        const uid = await action.findUidByTel('tel');
        assert(uid === 'uid');
    });
});