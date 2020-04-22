const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://sejaldua:appleapple@cluster0-eeltb.mongodb.net/test?retryWrites=true&w=majority";

function main() 
{
	MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, native_parser:true}, function(err, db) {
		if (db) {
			if(err) { return console.log(err); }
		
			var dbo = db.db("Textbooks");
			var collection = dbo.collection('books');
			
			var newData = {title: "Who Ate the Cheese", author: "Fin Haddie"};
			collection.insertOne(newData, function(err, res) {
				if (err) throw err;
				console.log("new document inserted");
				db.close();
			});
		}
		console.log("Success!");
	});
}

main();


