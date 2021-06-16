'use strict';
const fs = require('fs');
const path = require('path');


module.exports = function (directory, extension, callback) {

    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err)
        } else {
            list = list.filter(file => {
                return path.extname(file) === '.' + extension
            })

            callback(null, list)
        }
    })
}

