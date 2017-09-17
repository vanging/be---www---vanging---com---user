const assert = require('assert');
const username = require('../../../function/exist/username');

describe('[ function/exist/username ]', function()
{
    it('default()', async function()
    {
        let result = await username('username');
    });
});