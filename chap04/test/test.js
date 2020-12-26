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
    it('change production', function() {
        asia.producers[0].production = 20
        chai.expect(asia.shortfall).equal(-6)
        chai.expect(asia.profit).equal(330)
    })
})