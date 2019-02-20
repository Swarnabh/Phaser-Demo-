Game.state8 = function() {};
Game.state8.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#4c2cac";

    addChangeStateEventListeners();
  },
  update: function() {}
};
