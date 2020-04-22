const MongoClient = require('mongodb').MongoClient;
const url1 = "mongodb+srv://sejaldua:Tbl@zer58@cluster0-eeltb.mongodb.net/test?retryWrites=true&w=majority";

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var obj = url.parse(req.url, true).query;
    var checkBox = (obj.toggle) ? true : false;
    var query = obj.query;

    const client = new MongoClient(url1, {useNewUrlParser: true, useUnifiedTopology: true, native_parser: true});
    
    connect(client, checkBox, query, res);

}).listen(8000);

async function connect(client, checkBox, query, res) {
    client.connect(err => {
        const collection = client.db("stocks").collection("companies");
        console.log("Success!");
        console.log(checkBox, query);

        collection.find().toArray(function (err, items) {
            if (err) {
                console.log("Error: " + err);
                return;
            }
            else {
                var found = false;
                for (i = 0; i < items.length; i++) {
                    if (checkBox) {
                        if (items[i].company == query) {
                            res.write(query + "'s ticker symbol is: " + items[i].ticker);
                            found = true;
                            break;
                        }
                    }
                    else {
                        if (items[i].ticker == query) {
                            res.write(query + " is the ticker symbol for " + items[i].company);
                            found = true;
                            break;
                        }
                    }
                }

                if (!found) {
                    res.write("Oops! The company or ticker you have queried is not in our stock database.");
                }
            }
        });  //end find
    });
}