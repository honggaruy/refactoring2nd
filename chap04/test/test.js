import chai from 'chai'
import {Province, sampleProvinceData} from '../src/main.js'

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData())
        //chai.assert.equal(asia.shortfall, 5)
        chai.expect(asia.shortfall).equal(5)
    })
})