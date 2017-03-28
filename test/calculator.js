var expect = require('chai').expect;

var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

var calculator = require('../workshop').calculator;

describe('calculator', function() {
    it('Should add two numbers', function() {
        expect(calculator('add', 10, 20)).to.equal(30);
    });

    it('Should subtract two numbers', function() {
        expect(calculator('sub', 10, 20)).to.equal(-10);
    });

    it('Should multiply two numbers', function() {
        expect(calculator('mult', 10, 20)).to.equal(200);
    });

    it('Should divide two numbers', function() {
        expect(calculator('div', 10, 20)).to.equal(0.5);
    });

    it('Should return undefined on invalid operations', function() {
        expect(calculator('goof', 10, 20)).to.equal(undefined);
    });
});