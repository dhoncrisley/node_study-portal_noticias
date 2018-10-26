var app = require('./config/server');
var rotaNoticias = require('./app/routes/noticias');
var rotaHome = require('./app/routes/home');
var rotaForm = require('./app/routes/formulario_inclusao_noticia');
rotaNoticias(app);
rotaHome(app);
rotaForm(app);

app.listen(3000, function(){
    console.log('||Servidor iniciado||');
})