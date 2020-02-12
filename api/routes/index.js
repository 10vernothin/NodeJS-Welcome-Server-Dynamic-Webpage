var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/api/getList', function(req, res, next) {
  var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});


module.exports = router;
