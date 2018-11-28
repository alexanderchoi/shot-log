console.log('server js connection success')

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://localhost/mycustomers";

MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log('db connection success');
});