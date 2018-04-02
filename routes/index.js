var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metro Food Access', page : "home"});
});

router.get('/donate', function(req, res) {
    res.render('donate', { title: 'Donate', page : "donate"});
});

router.get('/blog', function(req, res) {
    res.render('blog', { title: 'Blog', page : "blog"});
});

router.get('/contact-us', function(req, res) {
    res.render('contact-us', { title: 'Contact Us', page : "contact-us"});
});



module.exports = router;
