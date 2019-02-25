//Gravity and Acceleration
accel = 400;
Game.state4 = function() {};
Game.state4.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#835212";
    adam = game.add.sprite(300, 300, "adam");
    game.physics.enable(adam);
    adam.body.gravity.y = 500;
    adam.body.bounce.y = 0.3;
    adam.body.drag.x = 400;
    adam.body.collideWorldBounds = true;
    addChangeStateEventListeners();
  },
  update: function() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      adam.body.acceleration.x = -accel;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      adam.body.acceleration.x = accel;
    } else {
      adam.body.acceleration.x = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      adam.body.velocity.y = -400;
    }
  }
};
