function mymodule(dir, ext, callback) {
    var fs = require("fs");
    var path = require('path');

    const promise = new Promise((resove, reject) => {
        fs.readdir(dir, (err, list) => {
            if (err) {
                reject(err);
            } else if (list) {
                resove(list);
            }
        });
    }).then(list => {
        list = list.filter(element => {
            var extName = path.extname(element);
            if(extName == '.' + ext){
                return extName;
            }
        });
        callback(null,list);
    }, err => {
        callback(err);
    }).catch(err => {
        callback(err);
    });
}

module.exports = mymodule;