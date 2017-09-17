
describe('[ lib/persistence/model/auth', function()
{
    it('default()', async function()
    {
        const auth = await require('../../../../lib/persistence/model/auth')();
        console.log(auth);
        return auth.sync();
    });
    it('default(), select data', async function()
    {
        const auth = await require('../../../../lib/persistence/model/auth')();
        const record = await auth.findById('uid');
        console.log(record);
    });
});