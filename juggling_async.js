var http = require('http');
var urls = process.argv.slice(2);
var results = [];


for (var i = 0; i < urls.length; i++){
  (function(i) {
    http.get(urls[i], function(request){
      var result = "";
      request.setEncoding('utf8');
      request.on('data', function(chunk){
        result += chunk;
      });
      request.on('end', function(){
        results[i] = result;
          var resultCount = 0;
          for (j = 0; j < results.length; j++) {
            if (results[j] != null) resultCount++;
          }
          if (resultCount == results.length) {
            for (j = 0; j < results.length; j++) {
              console.log(results[j]);
            }
          }
      });  
    });
  })(i);
}