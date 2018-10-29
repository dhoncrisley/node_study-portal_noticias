function NoticiasDAO(connection) {
    this._connection = connection;

}
NoticiasDAO.prototype.getNoticias = this.getNoticias = function (callback) {
    this._connection.query('select * from noticias', callback);
}
NoticiasDAO.prototype.getNoticia = this.getNoticia = function (callback) {
    this._connection.query('select * from noticias where id = 2', callback);
}
NoticiasDAO.prototype.salvarNoticia = this.salvarNoticia = function (noticia, callback) {
    
    this._connection.query('insert into noticias set ?', noticia, callback);
}


module.exports = function () {
    return NoticiasDAO;
}