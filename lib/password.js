module.exports =
    {
        sql:
            {
                dev:
                    {
                        host: 'sql.external.vanging.com',
                        username: 'com_vanging_www_user_test',
                        password: 'com_vanging_www_user_test',
                        port: 3306,
                        database: 'com_vanging_www_user_test'
                    },
                prod:
                    {
                        host: 'sql.external.vanging.com',
                        username: 'com_vanging_www_user',
                        password: 'com_vanging_www_user',
                        port: 3306,
                        database: 'com_vanging_www_user'
                    }
            },
        redis:
            {
                host: 'redis.external.vanging.com',
                password: 'Mm123456',
                port: 6379,
            }
    };