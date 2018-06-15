const expect = require('chai').expect;
const algorithm = require('../algorithms/repeat_string');

const repeatStringNumTimes = algorithm.repeatStringNumTimes; 

describe('repeatStringNumTimes', function() {
    describe('return value', function() {
        it('repeatStringNumTimes("*", 3) returns "***"', function() {
            expect(repeatStringNumTimes("*", 3)).to.equal("***");
        });
        it('repeatStringNumTimes("abc", 3) returns "abcabcabc"', function() {
            expect(repeatStringNumTimes("abc", 3)).to.equal("abcabcabc");
        });
        it('repeatStringNumTimes("abc", 4) returns "abcabcabcabc"', function() {
            expect(repeatStringNumTimes("abc", 4)).to.equal("abcabcabcabc");
        });
        it('repeatStringNumTimes("abc", 1) returns "abc"', function() {
            expect(repeatStringNumTimes("abc", 1)).to.equal("abc");
        });
        it('repeatStringNumTimes("*", 8) returns "********"', function() {
            expect(repeatStringNumTimes("*", 8)).to.equal("********");
        });
        it('repeatStringNumTimes("abc", -2) returns ""', function() {
            expect(repeatStringNumTimes("abc", -2)).to.equal("");
        });
    });
});

