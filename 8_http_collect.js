var http = require("http");
// var bl = require("b1");
var url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding("utf-8");
    var result = "";
    response.on("data", function (data) {
        result += data;
    });

    response.on("error", function (err) {
        if (err) {
            return console.error(err);
        }
    });

    response.on("end", function (end) {
        if (end) {
            result += end.toString();
        }
        console.log(result.length);
        console.log(result);
    });

    // response.pipe(bl(function (err, data) {
    //     if (err) {
    //         return console.error(err);
    //     } else {
    //         result = data.toString();
    //         console.log(result.length);
    //         console.log(result);
    //     }
    // }));
});