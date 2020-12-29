import fs from 'fs'
import {statement, htmlStatement} from './statement.js';

const plays = JSON.parse(fs.readFileSync('./src/plays.json').toString())
const invoices = JSON.parse(fs.readFileSync('./src/invoices.json').toString())

for (let invoice of invoices)
    console.log(statement(invoice, plays))

for (let invoice of invoices)
    console.log(htmlStatement(invoice, plays))