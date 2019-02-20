Game.state5 = function() {};
Game.state5.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#42490b";

    addChangeStateEventListeners();
  },
  update: function() {}
};
