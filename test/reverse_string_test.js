const expect = require('chai').expect;
const reverse_string = require('../algorithms/reverse_string');

const reverseString = reverse_string.reverseString;

describe('reverseString', function() {
    describe('return type', function() {
        it('should return a string', function() {
            expect(reverseString('hello')).to.be.a('string');
        });
    });
    describe('return value', function() {
        it('should return "olleh" when input is "hello"', function() {
            expect(reverseString('hello')).to.equal('olleh');
        });
        it('should return "ydwoH" when input is "Howdy"', function() {
            expect(reverseString('Howdy')).to.equal('ydwoH');
        });
        it('should return "htraE morf sgniteerG" when input is "Greetings from Earth"', function() {
            expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
        });
    });
});

