var expect = require('chai').expect;

var sumOfNumbers = require('../workshop').sumOfNumbers;

describe('sumOfNumbers', function() {
    it('Should return 42 when passed [21, 14, 6, 1]', function() {
        expect(sumOfNumbers([21, 14, 6, 1])).to.equal(42);
    });

    it('Should return zero with an empty array', function() {
        expect(sumOfNumbers([])).to.equal(0);
    });

    it('Should work with a single-element array', function() {
        expect(sumOfNumbers([42])).to.equal(42);
    });

    it('Should return undefined with invalid data', function() {
        expect(sumOfNumbers('hello')).to.equal(undefined);
    });

    it('Should return undefined with invalid data in an array', function() {
        expect(sumOfNumbers([10, "twenty", [1,2,3]])).to.equal(undefined);
    });
});