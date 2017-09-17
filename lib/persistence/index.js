const config = require('../config').sql;
const Sequelize = require('sequelize');

function getConnection()
{
    return new Promise(function(resolve, reject)
    {
        const sequelize = new Sequelize(config);
        sequelize.authenticate()
            .then(function()
            {
                resolve(sequelize);
            }, function(err)
            {
                console.log(err);
                reject(err);
            });
    });
}

module.exports.getConnection = getConnection;