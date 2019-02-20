var Game = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var adam;
var speed = 20;
Game.state1 = function() {};
Game.state1.prototype = {
  preload: function() {
    game.load.image("adam", "assets/images/Adam.png");
    game.load.image("bg", "assets/backgrounds/Bg.png");
  },
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = "#6699ff";
    console.log("state1");

    addChangeStateEventListeners();
    game.world.setBounds(0, 0, 2800, 1000);
    //To make our game screen resizeable as per window size
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //Adding Adam Image in the scene.
    var bg = game.add.sprite(0, 0, "bg");
    adam = game.add.sprite(centerX, centerY, "adam");
    adam.anchor.setTo(0.5, 0.5);

    //Scaling Adam to 50% of its initial size
    adam.scale.setTo(0.5, 0.5);

    //Adding Physics to Adam
    game.physics.enable(adam);
    adam.body.collideWorldBounds = true;

    //Adding camera movements
    game.camera.follow(adam);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
  },
  update: function() {
    //Sideway Movement
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      adam.x += speed;
      adam.scale.setTo(0.5, 0.5);
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      adam.scale.setTo(-0.5, 0.5);
      adam.x -= speed;
    }
    //Vertical Movement
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      adam.y -= speed;
      if (adam.y < 488) {
        adam.y = 488;
      }
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      adam.y += speed;
      if (adam.y > 728) {
        adam.y = 728;
      }
    }
  }
};

function changeState(i, stateNum) {
  console.log("state" + stateNum);
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
