var express = require('express');
var router = express.Router();
var http = require("http");
var host = 'http://127.168.0.0:3000/systems/'

const fetch = require('node-fetch');
const minCpu = 10;
var cpu = ''

/* This will use by transactions */

/* GET CPU from IoT Machine. */
/*Send Boolean */

router.get('/cpu/', function(req, res, next) {

  fetch(host)
    .then(res => res.json())
    .then(json => cpuJson = json);

    cpu = cpuJson.cpu;
    console.log(cpu);

    if (minCpu > cpu) {
      res.status(200).send({cpuStatus:true})
    }
    res.status(200).send({cpuStatus:false})

});

function getCPUStatus(minCpu, cpu){

  if (minCpu > cpu) {
    return true
  }
  return false
}//fullUrl

module.exports = {
  router,
  getCPUStatus
}
