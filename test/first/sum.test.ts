// import { sum } from '../../src/first/sum';

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });
import assert from 'assert';
import { sum } from '../../src/first/sum';

describe("function sum", function() {

    it("adds 1 + 2 to equal 3", function() {
        assert.equal(sum(1,2), 3)
    })
    
})