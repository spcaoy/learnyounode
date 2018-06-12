var fs = require('fs');
var path = process.argv[2];

function asyncReadFile(filePath) {
    const promise = new Promise((resove, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else if (data) {
                resove(data);
            }
        });
    });
    return promise;
}

asyncReadFile(path).then((data) => {
    var dataStr = data.toString();
    console.log(dataStr.split('\n').length - 1);
}, (err) => {
    console.log(err)
}).catch((err) => {
    console.log(err);
});