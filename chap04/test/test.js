import assert from 'assert'
import {Province, sampleProvinceData} from '../src/main.js'

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData())
        assert.strictEqual(asia.shortfall, 5)
    })
})