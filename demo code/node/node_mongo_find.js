const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://demouser:Mongodb6063@cluster1-cetrw.mongodb.net/test?retryWrites=true&w=majority";


  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if(err) { console.log("Connection err: " + err); return; }
  
    var dbo = db.db("Textbooks");
	var coll = dbo.collection('books');
	
	console.log("before find");
	var s = coll.find().stream();
	//var s = coll.find({},{projection: {"title":1, "author":1, "_id":0}}).stream();
	s.on("data", function(item) {console.log(item)});
	s.on("end", function() {console.log("end of data");  db.close();});
	console.log("after find");
	
/*	console.log("before find");
	coll.find().toArray(function(err, items) {
          if (err) {
            console.log("Error: " + err);
			return;
          } 
		  else 
		  {
            console.log("Items: ");
			for (i=0; i<items.length; i++)
				console.log(i + ": " + items[i].title + " by: " + items[i].author);
		    return;				
          }     	  
        });  //end find
		*/
});  //end connect





