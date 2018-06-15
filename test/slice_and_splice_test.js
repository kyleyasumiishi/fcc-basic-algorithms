const expect = require('chai').expect;
const algorithm = require('../algorithms/slice_and_splice');

const frankenSplice = algorithm.frankenSplice; 

describe('frankenSplice', function() {
    describe('return value', function() {
        it('frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]', function() {
            expect(frankenSplice([1, 2, 3], [4, 5], 1)).to.eql([4, 1, 2, 3, 5]);
        });
        it('frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]', function() {
            expect(frankenSplice([1, 2], ["a", "b"], 1)).to.eql(["a", 1, 2, "b"]);
        });
        it('frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]', function() {
            expect(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)).to.eql(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
        });
    });
});

