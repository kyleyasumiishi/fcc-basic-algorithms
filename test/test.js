const expect = require('chai').expect;

let foo = 'bar';
let beverages = { tea: ['chai', 'matcha', 'oolong']};

describe('test', function() {
    it('bar should be string', function() {
        expect(foo).to.be.a('string');
    });
});

