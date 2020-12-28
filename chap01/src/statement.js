export function statement(invoice, plays) {
    let result = `청구 내역 (고객명: ${invoice.customer})\n`
    for (let perf of invoice.performances) {
        result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`
    }

    result += `총액: ${usd(totalAmount())}\n`
    result += `적립 포인트: ${totalVolumeCredits()}점\n`
    return result

    function totalAmount() {
        let result = 0;
        for (let perf of invoice.performances) {
            result += amountFor(perf);
        }
        return result;
    }

    function totalVolumeCredits() {
        let result = 0;
        for (let perf of invoice.performances) {
            result += volumeCreditsFor(perf);
        }
        return result;
    }

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
            {
                style: "currency", currency: "USD",
                minimumFractionDigits: 2
            }).format(aNumber/100);
    }

    function volumeCreditsFor(perf) {
        let result = 0
        result += Math.max(perf.audience - 30, 0);
        if ("comedy" === playFor(perf).type)
            result += Math.floor(perf.audience / 5);
        return result
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch (playFor(aPerformance).type) {
            case "tragedy": // 비극
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy": // 희극
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
        }
        return result;
    }
}

import fs from 'fs'

const plays = JSON.parse(fs.readFileSync('./src/plays.json').toString())
const invoices = JSON.parse(fs.readFileSync('./src/invoices.json').toString())

for (let invoice of invoices)
    console.log(statement(invoice, plays))