var express = require('express');
var router = express.Router();

router.get('/ways-to-partner-with-mfan', function (req, res) {
    res.render('partners/ways-to-partner-with-mfan', {title: 'Ways to Partner With MFAN', page : "partners"});
});

router.get('/action-teams', function (req, res) {
    res.render('partners/action-teams', {title: 'Action Teams', page : "partners"});
});

router.get('/strategic-team', function (req, res) {
    res.render('partners/strategic-team', {title: 'Strategic Team', page : "partners"});
});

router.get('/partner-directory', function (req, res) {
    res.render('partners/partner-directory', {title: 'Partner Directory', page : "partners"});
});

router.get('/action-teams/local-government-action-team', function (req, res) {
   res.render('partners/action-teams/local-government-action-team', {title: 'Local Government Action Team', page : "partners"});
});

router.get('/action-teams/equity-action-team', function (req, res) {
    res.render('partners/action-teams/equity-action-team', {title: 'Equity Action Team', page : "partners"});
});

router.get('/action-teams/regulatory-action-team', function (req, res) {
    res.render('partners/action-teams/regulatory-action-team', {title: 'Regulatory Action Team', page : "partners"});
});

module.exports = router;
