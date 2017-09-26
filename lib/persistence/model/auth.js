const Sequelize = require('sequelize');

module.exports = async function()
{
    const sequelize = await require('../index').getConnection();
    module.exports.sequelize = sequelize;
    return sequelize.define
    (
        'auth',
        {
            uid:
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey: true,
                },
            password:
                {
                    type: Sequelize.STRING,
                    allowNull: false
                },
        },
        {
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        }
    );
};