//Touch screen swipes
var arrow;
var startX, startY, endX, endY, swipe;
Game.state5 = function() {};
Game.state5.prototype = {
  preload: function() {
    game.load.image("arrow", "assets/images/arrow.png");
  },
  create: function() {
    game.stage.backgroundColor = "#42490b";
    arrow = game.add.sprite(centerX, centerY, "arrow");
    arrow.anchor.setTo(0.5);
    addChangeStateEventListeners();
    game.input.onDown.add(this.startswipe);
    game.input.onUp.add(this.endSwipe);
  },
  update: function() {},
  startswipe: function() {
    startX = game.input.x;
    startY = game.input.y;
  },
  endSwipe: function() {
    endX = game.input.x;
    endY = game.input.y;
    if (Math.abs(endX - startX) < 10 && Math.abs(endY - startY) < 10) {
      return false;
    }
    if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
      console.log("Horizontal");
      if (endX > startX) {
        swipe = 90;
      } else if (endX < startX) {
        swipe = 270;
      }
    }
    if (Math.abs(endX - startX) < Math.abs(endY - startY)) {
      console.log("Vertical");
      if (endY > startY) {
        swipe = 180;
      } else if (endY < startY) {
        swipe = 0;
      }
    }
    arrow.angle = swipe;
  }
};
