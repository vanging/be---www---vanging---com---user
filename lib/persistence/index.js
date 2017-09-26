const config = require('../config').sql;
const Sequelize = require('sequelize');
let sequelize = null;

async function getConnection()
{
    if(sequelize === null)
    {
        const sequelize = new Sequelize(config);
        await sequelize.authenticate();
    }
    return sequelize;
}

module.exports.getConnection = getConnection;