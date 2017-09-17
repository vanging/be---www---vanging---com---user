const assert = require('assert');
const email = require('../../../function/exist/email');

describe('[ function/exist/email ]', function()
{
    it('default()', async function()
    {
        let result = await email('a.b@c.com');
        assert(!result);
    });
});