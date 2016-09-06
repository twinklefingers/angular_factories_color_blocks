var express = require('express');
var app = express();
var path = require('path');

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

// Handle index file separately
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
