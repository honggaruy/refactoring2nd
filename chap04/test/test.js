import chai from 'chai'
import {Province, sampleProvinceData} from '../src/main.js'

describe('province', function() {
    let asia;
    beforeEach( function() {
        asia = new Province(sampleProvinceData())
    })
    it('shortfall', function() {
        chai.expect(asia.shortfall).equal(5)
    })
    it('profit', function() {
        chai.expect(asia.profit).equal(230)
    })
})