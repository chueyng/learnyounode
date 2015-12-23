var fs = require('fs');
var path =  require('path');
var rdir = fs.readdir(process.argv[2], function (err, files){

  for (var i = 0; i < files.length; i++ ){
    if (path.extname(files[i]) == '.md') {
      var listFiles = files[i];
        console.log(listFiles);
    }
  }
});