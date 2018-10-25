var http = require('http');
server = http.createServer(function(req, res){
    var categoria = req.url;
    res.end("<html><body>Portal de Notícias</body></html>");
});
server.listen(3000);