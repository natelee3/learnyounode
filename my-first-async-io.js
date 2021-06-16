'use strict';
const fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf8'}, function (err, data) {
    if (err) {
        console.error(err)
    } else {
        let newlines = (data.split('\n')).length - 1
        console.log(newlines)    
    }
})