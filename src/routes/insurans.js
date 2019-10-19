var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/* POST save insurans data in mongodb database */
router.post('/insurans/', function(req, res, next) {
  var myobj = { age: req.body.age,
                sex: req.body.sex,
                bmi: req.body.bmi,
                smoker: req.body.smoker,
                region: req.body.region,
                charge: req.body.charge };

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    //var myobj = { name: "Company Inc", address: "Highway 37" };

    dbo.collection("insurance").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

  return res.redirect('/');
});

module.exports = router;
