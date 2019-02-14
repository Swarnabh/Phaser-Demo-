var Game = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var adam;
var speed = 5;
Game.state1 = function() {};
Game.state1.prototype = {
  preload: function() {
    game.load.image("adam", "assets/images/Adam.png");
  },
  create: function() {
    game.stage.backgroundColor = "#6699ff";
    console.log("state1");

    addChangeStateEventListeners();

    //To make our game screen resizeable as per window size
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //Adding Adam Image in the scene.
    adam = game.add.sprite(centerX, centerY, "adam");
    adam.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    //Sideway Movement
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      adam.x += speed;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      adam.x -= speed;
    }
    //Vertical Movement
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      adam.y -= speed;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      adam.y += speed;
    }
  }
};

function changeState(i, stateNum) {
  game.state.start("state" + stateNum);
}

function addKeyCallback(key, fn, args) {
  game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
  addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
  addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
  addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
  addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
  addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
  addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
  addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
  addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
  addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}
