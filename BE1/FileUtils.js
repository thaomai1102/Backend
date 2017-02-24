let fs = require('fs');

readfile = (file, callback) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            callback(err);
        } else {
            let str = data.toString();
            let arr = str.split("\n");
            callback(err, arr);
        }
    })
};s
writefile = (file, data, callback) => {

        fs.appendFile(file, dataCallback, (err) => {

            callback(err);
        })
}

module.exports.readfile = readfile;
module.exports.writefile = writefile;
