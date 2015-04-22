/**
 * Created by mmadhusoodan on 4/18/15.
 */

var scoreboard = require('../rest/player.js')

var JSONoutput = scoreboard.fetchPlayer(3852);

var firstName = JSONoutput.query.results.Player.PersonalDetails.FirstName;
var lastName = JSONoutput.query.results.Player.PersonalDetails.lastName;
