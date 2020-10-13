const { NotExtended } = require('http-errors');
var Score = require('../models/score')

// Display list of all Scores.
exports.get_score = function(req, res, next) {
    Score.findOne({})
        .exec((err, list_events) => {
            if (err) { return next(err); }
            res.send(list_events)
        })
};
// Display something on Even create GET request
exports.score_create_get = function(req, res) {
    res.send('Creating task and event')
};
// Handle Score create on POST.
exports.score_create_post = function(req, res, next) {
    score = new Score({ score: 100 })
    score.save()
        .then(() =>  {console.log('Created score')})
        .catch(err => {
            console.log(err);
            return next(err);
        })
};

exports.score_update_get = function(req, res, next) {
    res.end('GET: Updating Score');
    console.log('GET: Updating score');
};

exports.score_update_post = function(req, res, next) {
    let updatedScore = req.body;
    Score.findOneAndUpdate(null, updatedScore)
        .then(() => {
            console.log('Updated')
            res.redirect("http://localhost:3000");
        })
        .catch(err => {
            return next(err);
        })
}

exports.scoredelete_get = function(req, res, next) {
    res.send("NOT IMPLEMENTED: Delete event GET")
}

exports.scoredelete_post = function(req, res, next) {
    res.send("NOT IMPLEMENTED: Delete event POST")
}