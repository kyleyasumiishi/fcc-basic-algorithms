const expect = require('chai').expect;
const factorialize_number = require('../algorithms/factorialize_number'); 

const factorialize = factorialize_number.factorialize; 

describe('factorialize', function() {
    describe('return type', function() {
        it('should return a number', function() {
            expect(factorialize(5)).to.be.a('number');
        });
    });
    describe('return value', function() {
        it('returns 120 when num = 5', function() {
            expect(factorialize(5)).to.equal(120);
        });
        it('returns 3628800 when num = 10', function() {
            expect(factorialize(10)).to.equal(3628800);
        });
        it('returns 2432902008176640000 when num = 20', function() {
            expect(factorialize(20)).to.equal(2432902008176640000);
        });
        it('returns 1 when num = 0', function() {
            expect(factorialize(0)).to.equal(1);
        });
    });
});

