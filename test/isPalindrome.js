var expect = require('chai').expect;

var isPalindrome = require('../workshop').isPalindrome;

describe('isPalindrome', function() {
    it('Should return true when passed "radar"', function() {
        expect(isPalindrome('radar')).to.equal(true);
    });

    it('Should return true when passed empty string', function() {
        expect(isPalindrome('')).to.equal(true);
    });

    it('Should return false when passed "javascript"', function() {
        expect(isPalindrome('javascript')).to.equal(false);
    });

    it('Should return true even if the palindrome contains other characters', function() {
        expect(isPalindrome('A man, a plan, a canal - Panama')).to.equal(true);
    });
});