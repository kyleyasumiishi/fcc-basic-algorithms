const expect = require('chai').expect;
const celcius_to_fahrenheit = require('../algorithms/celcius_to_fahrenheit');

const convertToF = celcius_to_fahrenheit.convertToF;

describe('convertToF', function() {
    describe('return type', function() {
        it('should return a number', function() {
            expect(convertToF(0)).to.be.a('number');
        });
    });
    describe('return value', function() {
        it('should return a value of -22 when convertToF(-30)', function() {
            expect(convertToF(-30)).to.equal(-22);
        });
        it('should return a value of 14 when convertToF(-10)', function() {
            expect(convertToF(-10)).to.equal(14);
        });
        it('should return a value of 32 when convertToF(0)', function() {
            expect(convertToF(0)).to.equal(32);
        });
        it('should return a value of 68 when convertToF(20)', function() {
            expect(convertToF(20)).to.equal(68);
        });
        it('should return a value of 86 when convertToF(30)', function() {
            expect(convertToF(30)).to.equal(86);
        });
    });
});
