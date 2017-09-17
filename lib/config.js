const dev =
{
    host: 'sql.external.vanging.com',
    username: 'com_vanging_www_user_test',
    password: 'com_vanging_www_user_test',
    port: 3306,
    database: 'com_vanging_www_user_test',
    dialect: 'mysql',
};
const prod =
{
    host: 'sql.external.vanging.com',
    username: 'com_vanging_www_user',
    password: 'com_vanging_www_user',
    port: 3306,
    database: 'com_vanging_www_user',
    dialect: 'mysql',
};

const config =
    {
        redis:
            {
                host: 'redis.external.vanging.com',
                password: 'Mm123456',
                port: 6379,
            }
    };

if(process.env.NODE_ENV === 'development')
{
    console.log(`[sql] environment: development`);
    config.sql = dev;
}
else
{
    console.log(`[sql] environment: production`);
    config.sql = prod;
}

module.exports = config;