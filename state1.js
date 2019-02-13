var Game = {};
Game.state1 = function() {};
Game.state1.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#ececec";
    console.log("state1");
  },
  update: function() {}
};
