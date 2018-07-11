var http = require("http");
var url = [process.argv[2],process.argv[3],process.argv[4]];

function asynicUrl(url) {
    const promise = new Promise((reosove, reject) => {
        http.get(url, response=>{
            response.setEncoding("utf-8");
            var result = "";
            response.on("error", err=>reject(err));
            response.on("data", data=>result+=data);
            response.on("end", end=>reosove(result));
        });
    });
    return promise;
}

asynicUrl(process.argv[2]).then(data=>{
    console.log(data);
    return asynicUrl(process.argv[3]);
}, err=>{
    console.error(err);
}).then(data=>{
    console.log(data);
    return asynicUrl(process.argv[4]);
}, err=>{
    console.error(err);
}).then(data=>{
    console.log(data);
}, err=>{
    console.error(err);
});