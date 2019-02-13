Game.state2 = function() {};
Game.state2.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#ff9933";
    console.log("state2");

    addChangeStateEventListeners();
  },
  update: function() {}
};
