var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

function asyncReadDir(filePath) {
    const promise = new Promise((resove, reject) => {
        fs.readdir(filePath, (err, list) => {
            if (err) {
                reject(err);
            } else if (list) {
                resove(list);
            }
        });
    });
    return promise;
}

asyncReadDir(dir).then((list) => {
    list.forEach(element => {
        var extName = path.extname(element);
        if(extName == ext){
            console.log(element);
        }
    });
}, (err) => {
    console.log(err)
}).catch((err) => {
    console.log(err);
});