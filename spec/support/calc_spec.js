const calc = require('./calc');

describe('Calculator verification:', function() {
    it('check addition', function() {
        expect(calc(3,4,'+')).toEqual(7);
    });

    it('check subtraction', function() {
        expect(calc(3,4,'-')).toEqual(-1);
    });

    it('check multiplication', function() {
        expect(calc(3,4,'*')).toEqual(12);
    });

    it('check division', function() {
        expect(calc(3,4,'/')).toEqual(0.75);
    });

    it('check addition with wrong result', function() {
        expect(calc(3,4,'+')).not.toEqual(8);
    });

    it('check sqrt', function() {
        expect(calc(3,4,'**')).toEqual(81);
    });
});
 
 