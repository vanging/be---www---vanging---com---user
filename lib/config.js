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
            },
        mail:
            {
                "host": "smtpdm.aliyun.com",
                "port": 25,
                "secureConnection": true,
                "auth":
                    {
                        "user": "admin@notice.vanging.com",
                        "pass": "BynM123456"
                    }
            }
    };

if(process.env.NODE_ENV === 'production')
{
    console.log(`[sql] environment: production`);
    config.sql = prod;
}
else
{
    console.log(`[sql] environment: development`);
    config.sql = dev;
}

module.exports = config;