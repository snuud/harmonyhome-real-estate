require('./api/data/dbconnection.js');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
require('console-stamp')(console, {pattern: 'dd/mm/yyyy HH.MM:ss'});

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        if (!file.originalname.match(/\.(png|jpeg|jpg)$/)){
            var err = new Error();
            err.code = 'filetype';
            return cb(err);
        } else {
            cb(null, file.originalname + '_' + new Date().getTime() + '.jpg');
        }
    }
});

var upload = multer({
    storage: storage,
    limits: {fileSize: 10000000}
}).single('myfile');

app.post('/upload', function(req, res){
    upload(req, res, function(err){
        if (err){
            if (err.code === 'LIMIT_FILE_SIZE'){
                res.json({ success: false, message: 'File size is too large. Max limit is 10MB' });
            } else if (err.code === 'filetype'){
                res.json({ success: false, message: 'Filetype is invalid. Must be .png' });
            } else {
                res.json({ success: false, message: 'Unable to upload file' });
            }
        } else {
            if (!req.file){
                res.json({ success: false, message: 'No file was selected' });
            } else {
                res.json({ success: true, message: 'File uploaded!' });
            }
        }
    });
});

var routes = require('./api/routes');

var port = process.env.PORT || 8080;
app.set('port', port);

app.use(function(req, res, next){
    console.log(req.method + ' ' + req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', routes);

var server = app.listen(app.get('port'), function(){
    var serverPort = server.address().port;
    console.log('Server starts running on port ' + serverPort);
});

