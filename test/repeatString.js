var expect = require('chai').expect;

var repeatString = require('../workshop').repeatString;

describe('repeatString', function() {
    it('Should repeat a string correctly', function() {
        expect(repeatString('hello', 3)).to.equal('hellohellohello');
    });

    it('Should work with spaces and non-alpha characters', function() {
        expect(repeatString('!@# $%^', 2)).to.equal('!@# $%^!@# $%^');
    });

    it('Should return empty string if given a negative repeater as input', function() {
        expect(repeatString('hello', -1)).to.equal('');
    });

    it('Should return an empty string if given an empty string as input', function() {
        expect(repeatString('', 10)).to.equal('');
    });
});