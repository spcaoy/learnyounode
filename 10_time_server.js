var net = require("net");
var port = Number(process.argv[2]);

var server = net.createServer(function(socket){
    socket.end(function(){
        var time = new Date();
        var year = time.getFullYear(),
            month = time.getMonth() + 1,
            date = time.getDate(),
            hour = time.getHours(),
            minu = time.getMinutes();

            month = month < 10 ? "0" + month : month;
            date = date < 10 ? "0" + date : date;
            hour = hour < 10 ? "0" + hour : hour;
            minu = minu < 10 ? "0" + minu : minu;
            var timeStr = year + '-' + month + '-' + date + ' ' + hour + ':' + minu + '\n';
            return timeStr;
    }());
});
server.listen(port);