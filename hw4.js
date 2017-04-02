var usergrid = require('usergrid');
var express = require('express');
var app = express();
var router = express.Router();

var client = new usergrid.client({
  orgName: 'sarakim',
  appName: 'sandbox',
});

// GET to call all of movie collection
router.route('/movies').get(function (req, res) {
    // Call request to initiate the API call
    client.request(options, function (err, data) {
        if (err) {
            //error - GET failed
            res.send("ERROR: Data entered was not found");
        } 
        else {
            var options = {
                type: "movies" // Collection
            };
            var collection = new usergrid.collection(options);
            collection.fetch(function(error,result) {
                
            });
        }
    });
})

// router.route for /movies/:name to take queried movie name to GET and DELETE
app.get('/movies/:name', function (req,res) {
    client.request(options, function (error, result) {
        if(error) {
            res.send("Error! Movie does not exist");
        } else {
            res.send(req.params);    // Display the queried movie name inside parameters
        }
    });
})

app.delete('/movies/:name', function (req,res) {
    client.request(options, function (error, result) {
        if(error) {
            res.send("Error! Movie not deleted");
        } else {
            res.send(req.params);    // Display the queried movie name inside parameters
        }
    });
})

app.use('',router);
/*
querying
http://docs.apigee.com/app-services/content/querying-your-data
express routing
https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
*/
