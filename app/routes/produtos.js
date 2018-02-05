module.exports = function (app) {
    var listaProdutos = function (request, response) {

        var connection = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDAO(connection);

        produtosDao.lista(function (err, results) {
            response.render('produtos/lista', { lista: results });
        });

        connection.end();
    };

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function (request, response) {

        response.render('produtos/form');
    });

    app.post('/produtos', function (request, response) {

        var produto = request.body;

        var connection = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDAO(connection);
        produtosDao.salva(produto, function (err, resultados) {

            response.redirect('/produtos')            
        });
    });
} 