
import assert from 'assert';
import { div, formatDiv } from '../../src/experimental/div';

describe("function sum", function() {

    it("adds 4 / 2 to equal 2", function() {
        assert.equal(div(4,2), 2)
    })
    
})

describe('formatDiv', () => {
    
    it('should format the division of 4 by 2 correctly', () => {
        const result = formatDiv([4, 2]);
        assert.equal(result, `
+4 | +2
--------
   |= +2`);
    }); 

    it('should format the division of 104 by 52 correctly', () => {
        const result = formatDiv([104, 52]);
        assert.equal(result, `
+104 | +52
-----------
     |= +2`);
    });

    it('should format the division of -104 by 52 correctly', () => {
        const result = formatDiv([-104, 52]);
        assert.equal(result, `
-104 | +52
-----------
     |= -2`);
    });
});
