var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', (done) => {
    var res = generateMessage('Admin', 'Hello World!');
    expect(res).toMatchObject({from: 'Admin', text: 'Hello World!'});
    expect(res).toHaveProperty('createdAt');
    expect(typeof res.createdAt).toBe('number');
    done();
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', (done) => {
    var latitude = 1;
    var longitude = 1;
    var res = generateLocationMessage('Admin', latitude, longitude);

    expect(res).toMatchObject({
      from: 'Admin',
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
    expect(typeof res.createdAt).toBe('number');
    done();
  });
});
