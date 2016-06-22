var express = require('express');

app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendFile('public/html/index.html', {
        root: __dirname
    });
});





app.listen(8080, function() {
    console.log('Express listening on 8080...');
});
