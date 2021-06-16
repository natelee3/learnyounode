'use strict';
const fs = require('fs');

const data = fs.readFileSync(process.argv[2])

let dataString = data.toString()
let newlines = (dataString.split('\n')).length - 1
console.log(newlines)