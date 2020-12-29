import fs from 'fs';
import http from 'http';
import {htmlStatement} from './statement.js';

const plays = JSON.parse(fs.readFileSync('./src/plays.json').toString())
const invoices = JSON.parse(fs.readFileSync('./src/invoices.json').toString())

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    response.write(htmlStatement(invoices[0], plays))
    response.end()
}

http.createServer(onRequest).listen(8000)