// import { sum } from '../../src/first/sum';

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });
import assert from 'assert';
import { sum, formatSum } from '../../src/experimental/sum';

describe("function sum", function() {

    it("adds 1 + 2 to equal 3", function() {
        assert.equal(sum(1,2), 3)
    })
    
})

describe('formatSum', () => {
    it('should format the addition of 52 and 52 correctly', () => {
        const result = formatSum([52, 52]);
        assert.equal(result, `
    +52
    +52
--------
 = +104`);
    });

    it('should handle multiple numbers correctly', () => {
        const result = formatSum([10, 20, 30]);
        assert.equal(result, `
   +10
   +20
   +30
-------
 = +60`)
    });
    
    it('should handle negative numbers correctly', () => {
        const result = formatSum([-10, 20]);
        assert.equal(result,`
   -10
   +20
-------
 = +10`);
    });

    it('should handle multiple numbers correctly and multiles algarisms', () => {
        const result = formatSum([1000, 200, 30]);
        assert.equal(result, `
   +1000
    +200
     +30
---------
 = +1230`)
    });

    it('reverse: should handle multiple numbers correctly and multiles algarisms', () => {
        const result = formatSum([30, 200, 1000]);
        assert.equal(result, `
     +30
    +200
   +1000
---------
 = +1230`)
    });

});
