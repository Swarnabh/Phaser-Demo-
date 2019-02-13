Game.state9 = function() {};
Game.state9.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#f7f812";
    console.log("state9");
    addChangeStateEventListeners();
  },
  update: function() {}
};
