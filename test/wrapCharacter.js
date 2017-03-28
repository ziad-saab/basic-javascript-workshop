var expect = require('chai').expect;

var wrapCharacter = require('../workshop').wrapCharacter;

var largeString = 'the increased productivity fostered by a friendly environment and quality tools is essential to meet ever increasing demands for software.'
var largeStringCharWrapped = 'the increased productivity fostered by a\nfriendly environment and quality tools i\ns essential to meet ever increasing dema\nnds for software.'

describe('wrapCharacter', function() {
    it('Should wrap a string correctly', function() {
        expect(wrapCharacter(largeString)).to.equal(largeStringCharWrapped);
    });

    it('Should work with strings less than 40 characters', function() {
        expect(wrapCharacter('hello world')).to.equal('hello world');
    });
});