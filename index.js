var express = require('express');
var app = express();
//Assign port for heroku
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendFile('public/html/index.html', {
        root: __dirname
    });
});





app.listen(8080, function() {
    console.log('Express listening on 8080...');
});
