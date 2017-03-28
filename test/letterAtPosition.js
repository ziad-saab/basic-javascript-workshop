var expect = require('chai').expect;

var letterAtPosition = require('../workshop').letterAtPosition;

describe('letterAtPosition', function() {
    it('Should return the letter "e" when passed "hello" and 1', function() {
        expect(letterAtPosition('hello', 1)).to.equal('e');
    });

    it('Should return undefined if passed no input', function() {
        expect(letterAtPosition()).to.equal(undefined);
    });

    it('Should return undefined if passed a negative position', function() {
        expect(letterAtPosition('abc', -1)).to.equal(undefined);
    });
});