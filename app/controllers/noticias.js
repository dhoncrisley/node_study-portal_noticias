module.exports.noticias = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        res.render("noticias/noticias", {noticias: result});
    });
}
module.exports.noticia = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    var id = req.query;

    noticiasModel.getNoticia(id, function (error, result) {
        res.render("noticias/noticia", {noticia: result});
        // console.log(error);
        //console.log(result);
    })
}