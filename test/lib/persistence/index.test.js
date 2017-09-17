const sequelize = require('../../../lib/persistence/index');

describe('[ lib/persistence/index ]', function()
{
    it('getConnection()', function()
    {
        sequelize.getConnection();
    })
});