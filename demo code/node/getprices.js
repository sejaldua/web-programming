var http = require('http');
var adr = require('url');
var price = require("./myprices.js")
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var qobj = adr.parse(req.url, true).query;
	var txt = qobj.item;
    var itemPrice = price.prices(txt);
    res.end("The value of our item is " + itemPrice);
}).listen(8000);
