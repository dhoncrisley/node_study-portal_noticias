function NoticiasDAO(connection) {
    this._connection = connection;

}
NoticiasDAO.prototype.getNoticias = this.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data desc', callback);
}
NoticiasDAO.prototype.getNoticia = this.getNoticia = function (callback) {
    this._connection.query('select * from noticias where id = 2', callback);
}
NoticiasDAO.prototype.salvarNoticia = this.salvarNoticia = function (noticia, callback) {
    
    this._connection.query('insert into noticias set ?', noticia, callback);
}
NoticiasDAO.prototype.get5UltimasNoticias = this.get5UltimasNoticias = function ( callback) {
    this._connection.query('select * from noticias order by data desc limit 5', callback);
 
}


module.exports = function () {
    return NoticiasDAO;
}