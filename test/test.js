var chai = require('chai');
var assert = chai.assert,  
    expect = chai.expect,
    should = chai.should();

describe('detectie()', function() {  

    it('should be false on non IE browsers', function() {
      assert.equal(detectie(), false);
    })
    
    it('should be true on IE browsers', function() {
		assert.include(detectie(), 'IE', 'should be true on IE');
    })
})
