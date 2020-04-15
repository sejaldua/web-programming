var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Sejal Dua' + '<br>');
	res.end('Portland, OR');
}).listen(8000);
