module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    })
    app.post('/noticia/salvar', function (req, res) {
        var noticias = req.body;

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticias, connection, function (error, result) {
            res.redirect('/noticias');
            // console.log(error);
            //console.log(result);
        })
    })
}