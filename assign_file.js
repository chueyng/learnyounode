var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  var ext = "." +ext;

  fs.readdir(dir, function (err, files) {
    if (err) {
      callback(err, null);
    } else {
      var result = [];
      files.forEach(function (input) {
        if (path.extname(input) == ext) {
          result.push(input);
        }        
      });
      callback(null, result);
    }
  });  
}
