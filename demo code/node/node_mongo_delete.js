const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://sejaldua:appleapple@cluster0-eeltb.mongodb.net/test?retryWrites=true&w=majority";


MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, native_parser:true}, function(err, db) {
  if(err) { return console.log(err); }
  
  var dbo = db.db("Textbooks");
	var collection = dbo.collection('books');
	
	var theQuery = { title: /^Who/ };
  collection.deleteOne(theQuery, function(err, obj) {
    if (err) throw err;
    console.log("document(s) deleted");  
    db.close();
  });
});



