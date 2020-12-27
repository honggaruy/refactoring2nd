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
    it('change production', function() {   // sampleProvinceData() 베이스에 생산량을 변경해본다
        asia.producers[0].production = 20
        chai.expect(asia.shortfall).equal(-6)
        chai.expect(asia.profit).equal(330)
    })
    it('zero demand', function() {
        asia.demand = 0
        chai.expect(asia.shortfall).equal(-25)
        chai.expect(asia.profit).equal(0)
    })
    it('negative demand', function() {      // 수요가 마이너스일 경우
        asia.demand = -1
        chai.expect(asia.shortfall).equal(-26)
        chai.expect(asia.profit).equal(-10)
    })
    it('empty string demand', function() {  // 수요 입력란이 비어있다
        asia.demand = ""
        chai.expect(asia.shortfall).NaN
        chai.expect(asia.profit).NaN
    })
})

describe('no producers', function() {   // 생산자 배열이 비어있는 경우
    let noProducers
    beforeEach( function() {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        }
        noProducers = new Province(data)
    })
    it('shortfall', function() {
        chai.expect(noProducers.shortfall).equal(30)
    })
    it('profit', function() {
        chai.expect(noProducers.profit).equal(0)
    })
})

describe('string for producers', function() {   // 생산자 수 필드에 문자열을 대입한다
    it('string producers', function() {
        const data = {
            name: "String Producers",
            producers: "",
            demand: 30,
            price: 20
        }
        const prov = new Province(data)
        chai.expect(prov.shortfall).equal(0)
    })
})