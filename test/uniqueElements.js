var expect = require('chai').expect;
var uniqueElements = require('../workshop').uniqueElements;

describe('uniqueElements', function() {
    it('Should return [0, 4, 5] when passed [0, 3, 2, 1] and [1, 4, 3, 5, 2]', function() {
        expect(uniqueElements([0, 3, 2, 1], [1, 4, 3, 5, 2])).to.have.members([0, 4, 5]);
    });

    it('Should return an empty array if no uniques passed', function() {
        expect(uniqueElements([1,2,3], [1,2,3])).to.have.members([]);
    });

    it('Should work with single-element arrays', function() {
        expect(uniqueElements([], [42])).to.have.members([42]);
    });

    it('Should return undefined with invalid data', function() {
        expect(uniqueElements('hello', 'world')).to.equal(undefined);
    });
});