var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', (done) => {
    var res = generateMessage('Admin', 'Hello World!');
    expect(res).toMatchObject({from: 'Admin', text: 'Hello World!'});
    expect(res).toHaveProperty('createdAt');
    expect(typeof res.createdAt).toBe('number');
    done();
  });
});
