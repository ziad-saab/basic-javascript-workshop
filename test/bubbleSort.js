var expect = require('chai').expect;

var bubbleSort = require('../workshop').bubbleSort;

describe('bubbleSort', function() {
    it('Should sort numbers in order', function() {
        expect(bubbleSort([3,1,2])).to.deep.equal([1,2,3]);
    });

    it('Should work with repeated numbers', function() {
        expect(bubbleSort([2,3,3,1,2,4])).to.deep.equal([1,2,2,3,3,4]);
    });

    it('Should work with a single-element array', function() {
        expect(bubbleSort([42])).to.deep.equal([42]);
    });

    it('Should work with an empty array', function() {
        expect(bubbleSort([])).to.equal([]); // could this test be broken?
    });
});