const assert = require('chai').assert;
const calculateLbtt = require('../app').calculateLbtt;


describe('calculateLbtt', () => {
    it('Returns the correct lbtt payable', () => {
        assert.equal(calculateLbtt(145000), 0)
        assert.equal(calculateLbtt(150000), 100)
        assert.equal(calculateLbtt(250000), 2100)
        assert.equal(calculateLbtt(300000), 4600)
        assert.equal(calculateLbtt(800000), 54350)
    })
})


