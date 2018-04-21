var express = require('express');
var router = express.Router();

router.get('/003', function (req, res) {
    res.render('blog/003', {title: 'From Divide to Dividends: A Tour of Minnesota\'s Shared Connections', page : "blog"});
});

router.get('/002', function (req, res) {
    res.render('blog/002', {title: 'Metro Community Meal: Envisioning a Food System We All Deserve', page : "blog"});
});

router.get('/001', function (req, res) {
    res.render('blog/001', {title: 'Ways to ACT NOW to give input to your city’s comprehensive plans', page : "blog"});
});


module.exports = router;
