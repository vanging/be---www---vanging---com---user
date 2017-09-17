const Sequelize = require('sequelize');

module.exports = async function()
{
    const sequelize = await require('../index').getConnection();
    return sequelize.define
    (
        'profile',
        {
            uid:
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey: true,
                },
            email:
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: true,
                },
            email_verified:
                {
                    type: Sequelize.BOOLEAN,
                    allowNull: true,
                },
            nickname:
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: true,
                },
            tel:
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: true,
                },
            username:
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: true,
                },
        },
        {
            paranoid: true,
            underscored: true,
            freezeTableName: true,
        }
    );
};