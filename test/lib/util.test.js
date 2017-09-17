const util = require('../../lib/util');
const assert = require('assert');

describe('[ util ]', function()
{
    it('isEmail()', function()
    {
        assert(util.isEmail('a.b@c.com'));
        assert( ! util.isEmail('abc'));
    });

    it('isTel()', function()
    {
        assert(util.isTel('18671038230'));
        assert(util.isTel('12345678900'));
        assert( ! util.isTel('abc'));
    });
});