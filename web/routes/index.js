var express = require('express');
var router = express.Router();
var datos = require("../data/dataprovider");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RetroBlog', categorias: datos.getCategories(), imagenes: datos.getAllPosts() });
});

router.get('/pelicula/:id', function(req, res, next) {
  var pelicula = datos.getPostById(req.params.id);
  res.render('pelicula', { title: 'RetroBlog', pelicula: pelicula, categorias: datos.getCategories()});
});

module.exports = router;
