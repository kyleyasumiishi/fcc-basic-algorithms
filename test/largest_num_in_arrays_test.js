const expect = require('chai').expect;
const algorithm = require('../algorithms/largest_num_in_arrays');

const largestOfFour = algorithm.largestOfFour; 

describe('largestOfFour', function() {
    describe('return type', function() {
        it('should return an array object', function() {
            expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.be.an('array');
        });
    });
    describe('return value', function() {
        it('should return [27, 5, 39, 1001] when arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]', function() {
            expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.eql([27, 5, 39, 1001]);
        });
        it('should return [9, 35, 97, 1000000] when arr = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]', function() {
            expect(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).to.eql([9, 35, 97, 1000000]);
        });
        it('should return [25, 48, 21, -3] when arr = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]', function() {
            expect(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])).to.eql([25, 48, 21, -3]);
        });
    });
});
