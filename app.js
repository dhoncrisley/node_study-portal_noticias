var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Portal de notícias</body></html>");
})
app.get('/tecnology', function(req, res){
    res.send("<html><body>Retornou tecnology</body></html>");
})

app.listen(3000, function(){
    console.log('subiu');
})