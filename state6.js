//Using text and firebase

var hsText = [],
  hs = [16, 32, 73, 43, 15, 86, 72, 58, 89, 69];
Game.state6 = function() {};
Game.state6.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#eeeeee";

    addChangeStateEventListeners();
    for (var i = 1; i < 11; i++) {
      game.add
        .text(500, 30 + i * 90, i + ". ", { fontSize: "40px" })
        .anchor.setTo(1, 0);
    }
    for (var i = 0; i < 10; i++) {
      game.add.text(500, 30 + (i + 1) * 90, hs[i], { fontSize: "40px" });
    }
  },
  update: function() {}
};
