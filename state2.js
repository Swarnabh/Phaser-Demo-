var cursors,
  vel = 900;
var rock, grass;
Game.state2 = function() {};
Game.state2.prototype = {
  preload: function() {
    game.load.tilemap(
      "field",
      "assets/tilemaps/field.json",
      null,
      Phaser.Tilemap.TILED_JSON
    );
    game.load.image("grass", "assets/tilemaps/grass.png");
    game.load.image("rock", "assets/tilemaps/rock.png");
    game.load.image("adam", "assets/images/Adam.png");
  },
  create: function() {
    //game.stage.backgroundColor = "#ff9933";
    game.physics.startSystem(Phaser.Physics.ARCADE);

    addChangeStateEventListeners();
    //Adding TileMap and Layers
    var map = game.add.tilemap("field");
    map.addTilesetImage("grass");
    map.addTilesetImage("rock");
    grass = map.createLayer("grass");
    rock = map.createLayer("rock");
    adam = game.add.sprite(0, 0, "adam");
    adam.scale.setTo(0.25, 0.25);
    game.physics.enable(adam);
    cursors = game.input.keyboard.createCursorKeys();
    //Setting up Collission between adam and rocks
    map.setCollisionBetween(1, 9, true, "rock");
    map.setCollisionBetween(11, 11, true, "grass");
  },
  update: function() {
    game.physics.arcade.collide(adam, rock, function() {
      console.log("Hitting Rocks!");
    });

    game.physics.arcade.collide(adam, grass, function() {
      console.log("Hitting Grass!!");
    });

    if (cursors.up.isDown) {
      adam.body.velocity.y = -vel;
    } else if (cursors.down.isDown) {
      adam.body.velocity.y = vel;
    } else {
      adam.body.velocity.y = 0;
    }
    if (cursors.left.isDown) {
      adam.body.velocity.x = -vel;
    } else if (cursors.right.isDown) {
      adam.body.velocity.x = vel;
    } else {
      adam.body.velocity.x = 0;
    }
  }
};
