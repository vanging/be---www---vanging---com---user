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

    it('generateUid()', function()
    {
        let n = 100;
        while(n > 0)
        {
            console.log(util.generateUid());
            assert(util.generateUid().length === 36);
            n--;
        }
    });
});