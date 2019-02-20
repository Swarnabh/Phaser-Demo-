Game.state4 = function() {};
Game.state4.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#835212";

    addChangeStateEventListeners();
  },
  update: function() {}
};
