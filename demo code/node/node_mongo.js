const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://sejaldua:appleapple@cluster0-eeltb.mongodb.net/test?retryWrites=true&w=majority";

  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if(err) { return console.log(err); }
  
  var dbo = db.db("Textbooks");
  var collection = dbo.collection('books');
  console.log("Success!")
 
});



