var expect = require('chai').expect;

var firstLetter = require('../workshop').firstLetter;

describe('firstLetter', function() {
    it('Should return the letter "h" when passed "hello"', function() {
        expect(firstLetter('hello')).to.equal('h');
    });

    it('Should return undefined if passed no input', function() {
        expect(firstLetter()).to.equal(undefined);
    })
});