var expect = require('chai').expect;

var reverseString = require('../workshop').reverseString;

describe('reverseString', function() {
    it('Should return "olleh" when passed "hello"', function() {
        expect(reverseString('hello')).to.equal('olleh');
    });

    it('Should work with multiple words', function() {
        expect(reverseString('the quick brown fox')).to.equal('xof nworb ckiuq eht'); // hello, i may be borked
    });

    it('Should work with empty strings', function() {
        expect(reverseString('')).to.equal('');
    });
});