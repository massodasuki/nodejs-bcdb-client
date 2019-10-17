var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var http = require("http");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*This will be use by cron job*/

/* Retrive internal DATABASE and send to IoT Machine. */
router.get('/transactions/', function(req, res, next) {

  //IF THE CPU FROM CPU JS IS TRUE http://127.168.0.0:5000/cpu/

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
        dbo.collection("insurans").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result.name);
          /* POST data into IoT machine CPU using POST curl*/
          /*If success delete database. */
          db.close(); });
    });
  res.send('respond with a resource');

});

module.exports = router;
