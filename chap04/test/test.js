import chai from 'chai'
import {Province, sampleProvinceData} from '../src/main.js'

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData())
        chai.expect(asia.shortfall).equal(5)
    })
    it('profit', function() {
        const asia = new Province(sampleProvinceData())
        chai.expect(asia.profit).equal(230)
    })
})