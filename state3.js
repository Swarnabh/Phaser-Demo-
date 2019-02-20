Game.state3 = function() {};
Game.state3.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#7c624d";

    addChangeStateEventListeners();
  },
  update: function() {}
};
