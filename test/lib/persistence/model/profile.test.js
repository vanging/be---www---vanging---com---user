
describe('[ lib/persistence/model/profile', function()
{
    it('default()', async function()
    {
        const profile = await require('../../../../lib/persistence/model/profile')();
        return profile.sync();
    });
    it('default(), select data', async function()
    {
        const profile = await require('../../../../lib/persistence/model/profile')();
        const record = await profile.findById('uid');
        console.log(record.dataValues);
    });
});