var expect = require('chai').expect;

var addTwoNumbers = require('../workshop').addTwoNumbers;

describe('addTwoNumbers', function() {
    it('Should return 42 when passed 21 and 21', function() {
        expect(addTwoNumbers(21, 21)).to.equal(42);
    });

    it('Should return undefined if passed something else than numbers', function() {
        expect(addTwoNumbers('hello', 'world')).to.equal(undefined);
    });

    it('Should work with negative numbers', function() {
        expect(addTwoNumbers(10, -11)).to.equal(-1);
    });
});