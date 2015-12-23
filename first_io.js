var fs = require('fs');
var rf = fs.readFileSync(process.argv[2]).toString();
var result = rf.split('\n').length - 1

console.log(result);
