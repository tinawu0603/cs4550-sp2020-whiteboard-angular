// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/cs4550-sp20-whiteboard-angular'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/cs4550-sp20-whiteboard-angular/index.html'));
});

// Start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080);