var net = require('net');
var server = net.createServer(function(socket) {
  var date = new Date();
  var fDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + " " 
              + date.getHours() + ':' + date.getMinutes() + '\n';
  socket.end(fDate);
});
server.listen(process.argv[2]);
