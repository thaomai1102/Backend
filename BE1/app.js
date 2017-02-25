
let fileUntils = require('./FileUtils');

fileUntils.readfile(fileInput, (err, data) => {
    if (err) {
        return console.error(err);
    } else {
        data.forEach((value) => {
            console.log(value);
        });

        writeFile(fileOutput, data);
    }
});

writeFile = (file, data) => {
    fileUntils.writefile(file, data, (err) => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Success to write");
        }
    });
};
