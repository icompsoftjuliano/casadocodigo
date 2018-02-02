module.exports = function (app) {
    app.get('/produtos', function (request, response) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function (err, results) {
            response.render('produtos/lista', { lista: results });
        });

        connection.end();
    });
} 