const config = require('../config').sql;
const Sequelize = require('sequelize');

async function getConnection()
{
    const sequelize = new Sequelize(config);
    await sequelize.authenticate();
    return sequelize;
}

module.exports.getConnection = getConnection;