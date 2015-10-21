var assert = chai.assert,  
    expect = chai.expect,
    should = chai.should();

describe('detectIe()', function() {  

    it('should be false on non IE browsers', function() {
      assert.equal(detectIe(), false);
    })
    
    it('should be true on IE browsers', function() {
		assert.include(detectIe(), 'IE', 'should be true on IE');
    })
})