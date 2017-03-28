var expect = require('chai').expect;

var capitalize = require('../workshop').capitalize;

describe('capitalize', function() {
    it('Should return "Hello World" if passed "hello world"', function() {
        expect(capitalize('hello world')).to.equal('Hello World');
    });

    it('Should return "Hello World" if passed "HELLO WORLD"', function() {
        expect(capitalize('HELLO WORLD')).to.equal('Hello World');
    });

    it('Should work with a single word', function() {
        expect(capitalize('word')).to.equal('Word');
    });

    it('Should work with an empty string', function() {
        expect(capitalize('')).to.equal('');
    });
});