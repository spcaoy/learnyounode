var fs = require('fs');
var path = process.argv[2];
var buffer = fs.readFileSync(path);
var str = buffer.toString();
var strList = str.split('\n');
console.log(strList.length - 1);