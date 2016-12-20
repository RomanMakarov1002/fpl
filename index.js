module.exports = {
  gameweeks: function(week, fn){
    var request = require('request');
    var endPointGameWeeks = "https://fantasy.premierleague.com/drf/entry/1/event/"+week+"/picks";

    request({method: "get",  url: endPointGameWeeks}, function(err, resp, body){
      if(body.error) return console.error(body.error);
      fn(body);
    });
  },
  players: function(fn){
    var request = require('request');
    var endPointPlayers = "https://fantasy.premierleague.com/drf/bootstrap-static";

    request({method: "get",  url: endPointPlayers}, function(err, resp, body){
      if(body.error) return console.error(body.error);
      fn(body);
    });
  },
  profiles: function(profile,fn){
    var request = require('request');
    request({method: "get", url: profile}, function(err, resp, body){
      if(body.error) return console.error(body.error);
      fn(body);
    })
  },
  live: function(live, fn){
    var request = require('request');
    request({method: "get", url: live}, function(err, resp, body){
      if(body.error) return console.error(body.error);
      fn(body);
    })
  }
}
