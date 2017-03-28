var expect = require('chai').expect;

var wrapWord = require('../workshop').wrapWord;

var largeString = 'the increased productivity fostered by a friendly environment and quality tools is essential to meet ever increasing demands for software.'
var largeStringWordWrapped = 'the increased productivity fostered by a\nfriendly environment and quality tools\nis essential to meet ever increasing\ndemands for software.'
var stringWithLargeWord = 'this string contains a wordthatislargerthanfourtycharactersfortesting the increased productivity fostered by a friendly environment and quality tools';
var stringWithLargeWordWrapped = 'this string contains a\nwordthatislargerthanfourtycharactersfortesting\nthe increased productivity fostered by a\nfriendly environment and quality tools';

describe('wrapWord', function() {
    it('Should wrap a string correctly', function() {
        expect(wrapWord(largeString)).to.equal(largeStringWordWrapped);
    });

    it('Should work with strings less than 40 characters', function() {
        expect(wrapWord('hello world')).to.equal('hello world');
    });

    it('Should work with strings containing words of more than 40 characters', function() {
        expect(wrapWord(stringWithLargeWord)).to.equal(stringWithLargeWordWrapped);
    });
});