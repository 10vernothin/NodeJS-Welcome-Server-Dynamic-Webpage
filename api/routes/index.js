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

router.post('/api/login/submit-form', function(req, res, next) {
    console.log(req.body);
    res.send(req.body.formControls.email);
});


module.exports = router;
