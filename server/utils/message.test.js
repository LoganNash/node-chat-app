var expect = require('expect');
const _ = require('lodash');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe(typeof new Date().getTime());
        expect(_.pick(message, ['from', 'text'])).toEqual({from, text});
    });
});