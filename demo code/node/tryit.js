var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Sejal Dua\n');
	res.write('Portland, OR');
	res.end();
}).listen(8000);
