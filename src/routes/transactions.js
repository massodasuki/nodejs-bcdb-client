var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var http = require("http");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* Retrive internal DATABASE and send to IoT Machine. */
/* POST data into IoT machine CPU using POST curl*/
/*If success delete database. */
//Find

router.get('/transactions/', function(req, res, next) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("insurans").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });

  // const postData = querystring.stringify({
  // 'msg': 'Hello World!'
  // });

  // const options = {
  //   hostname: 'www.google.com',
  //   port: 80,
  //   path: '/upload',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Content-Length': Buffer.byteLength(postData)
  //   }
  // };
  //
  // const reqst = http.request(options, (res) => {
  //   console.log(`STATUS: ${res.statusCode}`);
  //   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  //   res.setEncoding('utf8');
  //   res.on('data', (chunk) => {
  //     console.log(`BODY: ${chunk}`);
  //   });
  //   res.on('end', () => {
  //     console.log('No more data in response.');
  //   });
  // });
  //
  // reqst.on('error', (e) => {
  //   console.error(`problem with request: ${e.message}`);
  // });
  //
  // // Write data to request body
  // reqst.write(postData);
  // reqst.end();


  res.send('respond with a resource');
});




module.exports = router;
