var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
	file="companies.csv";
	fs.readFile(file, function(err, txt) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(txt);
		res.end();
	});
}).listen(8000);
