const sequelize = require('../../../lib/persistence/index');

describe('[ lib/persistence/index ]', function()
{
    it('getConnection()', function()
    {
        return sequelize.getConnection();
    })
});