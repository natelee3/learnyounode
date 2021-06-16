'use strict';

const myModule = require('./mymodule.js')
let directory = process.argv[2];
let extension = process.argv[3];

myModule(directory, extension, (err, list) => {
    if (err) {
        return console.error(err)
    }
    list.forEach(file => {
        console.log(file)
    })
})

