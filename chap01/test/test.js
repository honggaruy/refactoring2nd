import chai from 'chai'
import {statement, htmlStatement} from '../src/statement.js'

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

describe('htmlStatement', function () {
    let receiptLines
    before( function() {
        receiptLines = htmlStatement(sampleInvoiceData(), samplePlaysData()).split('\n')
    })
    it('고객명', function () {
        chai.expect(receiptLines[0]).equal('<h1>청구 내역 (고객명: BigCo)</h1>')
    })
    it('table Start', function () {
        chai.expect(receiptLines[1]).equal('<table>')
    })
    it('header', function () {
        chai.expect(receiptLines[2]).equal('<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>')
    })
    it('Hamlet', function () {
        chai.expect(receiptLines[3]).equal('  <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>')
    })
    it('As You', function () {
        chai.expect(receiptLines[4]).equal('  <tr><td>As You Like it</td><td>(35석)</td><td>$580.00</td></tr>')
    })
    it('Othello', function () {
        chai.expect(receiptLines[5]).equal('  <tr><td>Othello</td><td>(40석)</td><td>$500.00</td></tr>')
    })
    it('table End', function () {
        chai.expect(receiptLines[6]).equal('</table>')
    })
    it('총액', function () {
        chai.expect(receiptLines[7]).equal('<p>총액: <em>$1,730.00</em></p>')
    })
    it('적립', function () {
        chai.expect(receiptLines[8]).equal('<p>적립 포인트: <em>47</em>점</p>')
    })
    it('빈줄', function () {
        chai.expect(receiptLines[9]).equal('')
    })
    it('출력라인 수', function () {
        chai.expect(receiptLines.length).equal(10)
    })
})