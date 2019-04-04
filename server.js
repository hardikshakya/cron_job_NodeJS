let app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    express = require('express'),
    CronJob = require('cron').CronJob;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(err, req, res, next) {
  return res.send({ "errorCode": 401, "errorMessage": "Something went wrong!" });
});

app.use(function(req, res, next) {
    res.send({ "errorCode": 404, "errorMessage": 'Page not found!' })
});

app.get('/', function(req, res) {
    res.send('hello, jsonworld!');
});

new CronJob('*/5 * * * * *', function() {
    console.log("staring cron");
}, null, true, 'Asia/Kolkata');


server.listen('3000',function(){
    console.log('Server running on port 3000');
});
