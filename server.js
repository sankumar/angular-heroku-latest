const express = require('express');
const path = require('path');

const hApp = express();

hApp.use(express.static(__dirname + '/dist/angular-heroku-latest'));

hApp.get('/*', function(request, response){
    response.sendFile(path.join(__dirname + '/dist/angular-heroku-latest/index.html'));
});

hApp.listen(process.env.PORT || 8080);