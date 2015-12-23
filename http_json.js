var http = require('http');
var url =  require('url');

var routes = {
  "/api/parsetime": function(parseUrl){
    date = new Date(parseUrl.query.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  },

  "/api/unixtime": function(parseUrl) {
    return {unixtime: (new Date(parseUrl.query.iso)).getTime()};
  }
}

var server = http.createServer(function(request, response) {
  var parseUrl = url.parse(request.url, true);
  var resource = routes[parseUrl.pathname];
  if (resource) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(resource(parseUrl)));
  } else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);