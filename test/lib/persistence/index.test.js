const sequelize = require('../../../lib/persistence/index');

describe('[ lib/persistence/index ]', function()
{
    it('getConnection()', async function()
    {
        return sequelize.getConnection();
    })
});