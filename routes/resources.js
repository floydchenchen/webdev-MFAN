var express = require('express');
var router = express.Router();

router.get('/tools-and-resources', function (req, res) {
    res.render('resources/tools-and-resources', {title: 'Tools and Resources', page : "resources"});
});

router.get('/critical-conversation-on-race', function (req, res) {
    res.render('resources/critical-conversation-on-race', {title: 'Critical Conversation on Race', page : "resources"});
});

router.get('/equity-in-policy-timeline', function (req, res) {
    res.render('resources/equity-in-policy-timeline', {title: 'Equity in Policy Timeline', page : "resources"});
});

module.exports = router;
