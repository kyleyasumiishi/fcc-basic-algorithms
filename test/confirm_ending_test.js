const expect = require('chai').expect;
const algorithm = require('../algorithms/confirm_ending');

const confirmEnding = algorithm.confirmEnding; 

describe('confirmEnding', function() {
    describe('true or false', function() {
        it('returns true when confirmEnding("Bastian", "n")', function() {
            expect(confirmEnding("Bastian", "n")).to.be.true;
        });
        it('returns true when confirmEnding("Congratulation", "on")', function() {
            expect(confirmEnding("Congratulation", "on")).to.be.true;
        });
        it('returns false when confirmEnding("Connor", "n")', function() {
            expect(confirmEnding("Connor", "n")).to.be.false;
        });
        it('returns false when confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")', function() {
            expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).to.be.false;
        });
        it('returns true when confirmEnding("He has to give me a new name", "name")', function() {
            expect(confirmEnding("He has to give me a new name", "name")).to.be.true;
        });
        it('returns true when confirmEnding("Open sesame", "same")', function() {
            expect(confirmEnding("Open sesame", "same")).to.be.true;
        });
        it('returns false when confirmEnding("Open sesame", "pen")', function() {
            expect(confirmEnding("Open sesame", "pen")).to.be.false;
        });
        it('returns false when confirmEnding("Open sesame", "game")', function() {
            expect(confirmEnding("Open sesame", "game")).to.be.false;
        });
        it('returns false when confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")', function() {
            expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).to.be.false;
        });
        it('returns true when confirmEnding("Abstraction", "action")', function() {
            expect(confirmEnding("Abstraction", "action")).to.be.true;
        });
    });
});

