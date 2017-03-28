var expect = require('chai').expect;

var multiplyTwoNumbers = require('../workshop').multiplyTwoNumbers;

describe('multiplyTwoNumbers', function() {
    it('Should return 42 when passed 7 and 6', function() {
        expect(multiplyTwoNumbers(7, 6)).to.equal(42);
    });

    it('Should return undefined if passed something else than numbers', function() {
        expect(multiplyTwoNumbers('hello', 'world')).to.equal(undefined);
    });

    it('Should work with negative numbers', function() {
        expect(multiplyTwoNumbers(-1, -1)).to.equal(1);
    });

    it('Should work with zero', function() {
        expect(multiplyTwoNumbers(0, 10)).to.equal(0);
    });

    it('Should work with Infinity', function() {
        expect(multiplyTwoNumbers(42, Infinity)).to.equal(Infinity);
    });
});