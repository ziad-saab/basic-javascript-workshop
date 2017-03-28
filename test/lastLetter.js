var expect = require('chai').expect;

var lastLetter = require('../workshop').lastLetter;

describe('lastLetter', function() {
    it('Should return the letter "o" when passed "hello"', function() {
        expect(lastLetter('hello')).to.equal('o');
    });

    it('Should return undefined if passed no input', function() {
        expect(lastLetter()).to.equal(undefined);
    });

    it('Should return undefined if passed an empty string', function() {
        expect(lastLetter('')).to.equal(undefined);
    });
});