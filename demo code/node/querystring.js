var http = require('http');
var adr = require('url');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var qobj = adr.parse(req.url, true).query;
	var txt = qobj.x;
	res.end(txt);
}).listen(8000);
