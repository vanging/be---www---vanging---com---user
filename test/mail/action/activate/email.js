const email = require('../../../../lib/mail/action/activate/email');

describe('[ lib/mail/activate/email ]', function()
{
    it('default()', async function()
    {
        this.timeout(10000);
        await email('278227739@qq.com', 'session_for_test');
        const result = await email('278227739@qq.com', 'session_for_test');
        console.log(result);
    })
});