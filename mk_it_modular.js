var module = require('./assign_file.js');

var dir = process.argv[2];
var ext = process.argv[3];

module(dir, ext, function(err, files) {
  for (var i = 0; i < files.length; i++){
    console.log(files[i]);
  }
});
