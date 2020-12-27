import chai from 'chai'
import {statement} from '../src/statement.js'

function samplePlaysData() {
    return {
        "hamlet": {"name": "Hamlet", "type": "tragedy"},
        "as-like": {"name": "As You Like it", "type": "comedy"},
        "othello": {"name": "Othello", "type": "tragedy"}
    }
}

function sampleInvoiceData() {
    return {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
}

describe('statement', function () {
    let receiptLines
    before( function() {
        receiptLines = statement(sampleInvoiceData(), samplePlaysData()).split('\n')
    })
    it('고객명', function () {
        chai.expect(receiptLines[0]).equal('청구 내역 (고객명: BigCo)')
    })
    it('Hamlet', function () {
        chai.expect(receiptLines[1]).equal('  Hamlet: $650.00 (55석)')
    })
    it('As You', function () {
        chai.expect(receiptLines[2]).equal('  As You Like it: $580.00 (35석)')
    })
    it('Othello', function () {
        chai.expect(receiptLines[3]).equal('  Othello: $500.00 (40석)')
    })
    it('총액', function () {
        chai.expect(receiptLines[4]).equal('총액: $1,730.00')
    })
    it('적립', function () {
        chai.expect(receiptLines[5]).equal('적립 포인트: 47점')
    })
    it('빈줄', function () {
        chai.expect(receiptLines[6]).equal('')
    })
    it('출력라인 수', function () {
        chai.expect(receiptLines.length).equal(7)
    })
})