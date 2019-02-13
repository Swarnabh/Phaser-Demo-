Game.state6 = function() {};
Game.state6.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#0280fd";
    console.log("state6");
    addChangeStateEventListeners();
  },
  update: function() {}
};
