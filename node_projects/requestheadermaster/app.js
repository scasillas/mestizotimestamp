//Basic required imports for NodeJS

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//Create an instance of expres for our app an dinstantiate bodyParser and cors

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//API url 
var api = '/api/whoami';

app.get(api, function(req, res, next){
    console.log('100');
})

app.listen(3000, function(){
    console.log("Working");
});