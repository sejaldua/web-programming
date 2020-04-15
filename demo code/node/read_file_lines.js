var readline = require('readline');
var fs = require('fs');

var myFile = readline.createInterface({
  input: fs.createReadStream('../node/companies.csv')
});

myFile.on('line', function (line) {
  console.log('"' +  line + '" has ' + line.length + ' characters');
});
