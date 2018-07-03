var mode = require("./6_make_it_modular.js");

var dir = process.argv[2];
var ext = process.argv[3];
mode(dir, ext, (err, list)=>{
    if(err){
        console.error('there was an error:', err);
    }else {
        list.forEach(element => {
            console.log(element);
        });
    }
});