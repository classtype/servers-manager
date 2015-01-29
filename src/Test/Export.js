$.Export = function() {
    var exec = require('child_process').exec;
    
    var IP = arguments[0]['node']['servers'][0]['IP'];
    console.log(IP);
    next: function() {
        var child = exec('ssh root@109.234.154.74', function (error, stdout, stderr) {
            /* Код */
            next();
        });
    }
};