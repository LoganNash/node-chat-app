var expect = require('expect');
const _ = require('lodash');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe(typeof new Date().getTime());
        expect(_.pick(message, ['from', 'text'])).toEqual({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'logs';
        var lat = 1;
        var lng = -1;
        var message = generateLocationMessage(from, lat, lng);

        expect(typeof message.createdAt).toBe(typeof new Date().getTime());
        expect(message.from).toEqual(from);
        expect(message.url).toEqual(`https://wwww.google.com/maps?q=${lat},${lng}`);
    })
})