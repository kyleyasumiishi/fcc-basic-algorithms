const expect = require('chai').expect;
const algorithm = require('../algorithms/longest_word');

const findLongestWordLength = algorithm.findLongestWordLength; 

describe('findLongestWordLength', function() {
    describe('return type', function() {
        it('return type', function() {
            expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).to.be.a('number');
        });
    });
    describe('return value', function() {
        it('should return 6 when str = "The quick brown fox jumped over the lazy dog"', function() {
            expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).to.equal(6);
        });
        it('should return 5 when str = "May the force be with you"', function() {
            expect(findLongestWordLength("May the force be with you")).to.equal(5);
        });
        it('should return 6 when str = "Google do a barrel roll"', function() {
            expect(findLongestWordLength("Google do a barrel roll")).to.equal(6);
        });
        it('should return 8 when str = "What is the average airspeed velocity of an unladen swallow"', function() {
            expect(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")).to.equal(8);
        });
        it('should return 19 when str = "What if we try a super-long word such as otorhinolaryngology"', function() {
            expect(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")).to.equal(19);
        });
    });
});