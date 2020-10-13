var express = require("express");
var router = express.Router();

// Require controller modules.
var event_controller = require('../controllers/eventController');
var score_controller = require('../controllers/scoreController');

// router.get("/event", function(req, res, next) {
//     res.json(DATA)
// });

/// EVENT ROUTES ///

// Print Event list
router.get('/events', event_controller.event_list)

// POST request for creating Event.
router.post('/event/create', event_controller.event_create_post);

// GET request for creating Event
router.get("/event/create", event_controller.event_create_get);

// GET request to delete Event.
router.get('/event/:id/delete', event_controller.event_delete_get);

// POST request to delete Event.
router.post('/event/:id/delete', event_controller.event_delete_post);

// GET request to update Event.
router.get('/event/:id/update', event_controller.event_update_get);

// POST request to update Event.
router.post('/event/:id/update', event_controller.event_update_post);


//// SCORE ROUTES ////
// Display score
router.get('/score', score_controller.get_score)

// POST request to update Score
router.post('/score/update', score_controller.score_update_post);

router.post('/score/create', score_controller.score_create_post)
module.exports = router;
