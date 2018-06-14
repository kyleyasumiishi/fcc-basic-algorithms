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

        });
        it('should return a value of 14 when convertToF(-10)', function() {

        });
        it('should return a value of 32 when convertToF(0)', function() {

        });
        it('should return a value of 68 when convertToF(20)', function() {

        });
        it('should return a value of 86 when convertToF(30)', function() {

        });
    });
});
