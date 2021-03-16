const compare = require('./compare');

describe('Comparison verification:', function () {
    it('check compare when one of the number is 50', function() {
        expect(compare(50,1)).toBeTrue();
        expect(compare(1,50)).toBeTrue();
    });

    it('check compare when sum is 50', function() {
        expect(compare(49,1)).toBeTrue();
    });

    it('check compare when none of numbers is 50 and sum is not 50', function() {
        expect(compare(1,2)).toBeFalse();
    });
})