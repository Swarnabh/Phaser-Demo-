var i;
Game.state3 = function() {};
Game.state3.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#7c624d";

    addChangeStateEventListeners();
    a1 = game.add.sprite(50, 100, "adam");
    a2 = game.add.sprite(300, 100, "adam");
    a3 = game.add.sprite(600, 100, "adam");
    a4 = game.add.sprite(900, 100, "adam");
    game.add.tween(a1).to({ y: 400 }, 2000, "Quad.easeOut", true);
    game.add.tween(a2).from({ y: 1000 }, 1500, "Circ.easeOut", true);
    game.add.tween(a3).to({ alpha: 0 }, 1500, "Circ.easeOut", true);
    i = game.add.tween(a4).to({ x: 1000, y: 400 }, 1500, "Elastic.easeOut");
  },
  update: function() {}
};
