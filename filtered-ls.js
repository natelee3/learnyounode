'use strict';
const fs = require('fs');
const path = require('path');

let directory = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(directory, (err, list) => {
    if (err) {
        console.error(err)
    } else {
        list.forEach(file => {
            if (path.extname(file) === extension) {
                console.log(file)
            }
        })
    }
})

