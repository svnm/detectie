var chai = require('chai');
var detectie = require('../detectie');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('detectie()', function() {  

    it('should be false on non IE browsers', function() {
      assert.equal(detectie(), false);
    })
    
    it('should be true on IE browsers', function() {
		assert.include(detectie(), 'IE', 'should be true on IE');
    })
})