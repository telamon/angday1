var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname,'src')));

app.listen(4567);

