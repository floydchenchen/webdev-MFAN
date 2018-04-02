var express = require('express');
var router = express.Router();

router.get('/upcoming-events', function (req, res) {
    res.render('events/upcoming-events', {title: 'Upcoming Events', page : "events"});
});

router.get('/calendar', function (req, res) {
    res.render('events/calendar', {title: 'Calendar', page : "events"});
});

router.get('/critical-convos-forum', function (req, res) {
    res.render('events/critical-convos-forum', {title: 'Critical Convos Forum', page : "events"});
});

router.get('/events-history', function (req, res) {
    res.render('events/events-history', {title: 'Events History', page : "events"});
});

module.exports = router;
