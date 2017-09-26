const config = require('../config').sql;
const Sequelize = require('sequelize');
let sequelize = new Sequelize(config);

async function getConnection()
{
    await sequelize.authenticate();
    return sequelize;
}

module.exports.getConnection = getConnection;