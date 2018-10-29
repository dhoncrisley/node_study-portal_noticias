var mysql = require('mysql');
var connMySQL = function(){
    //console.log('conexao com o db estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}
module.exports = function(){
    return connMySQL;
}
