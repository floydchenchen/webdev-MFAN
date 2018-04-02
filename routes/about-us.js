var express = require('express');
var router = express.Router();

router.get('/about-us', function (req, res) {
    res.render('about-us/about-us', {title: 'About Us', page : "about-us"});
});

router.get('/mfan-history', function (req, res) {
    res.render('about-us/mfan-history', {title: 'MFAN History', page : "about-us"});
});

router.get('/meet-the-strategic-team', function (req, res) {
    res.render('about-us/meet-the-strategic-team', {title: 'Meet the Strategic Team', page : "about-us"});
});

router.get('/picture-gallery', function (req, res) {
    res.render('about-us/picture-gallery', {title: 'Picture Gallery', page : "about-us"});
});

module.exports = router;
