var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ScorecardSchema = new Schema({
    mid: Number,
    series: String,
    stadium: String,
    match: String,
    matchStatus: String,
    team1: String,
    team2: String,
    mom: String
});

module.exports = mongoose.model('Scorecard', ScorecardSchema);