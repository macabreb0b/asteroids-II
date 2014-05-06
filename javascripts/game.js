(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {})
  
  var Asteroid = Asteroids.Asteroid;
  
  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    
    this.addAsteroids(10);
    
  };
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  
  Game.prototype.addAsteroids = function(addAsteroids) {
    for(var i = 0; i < addAsteroids; i++){
      this.asteroids.push(Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    };
  };
  
  Game.prototype.draw = function() {
    // use clearRect to empty canvas rect
    // call draw on each asteroid
    var that = this;
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
  };
  
  Game.prototype.move = function() {
    // move each asteroid
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };
  
  Game.prototype.step = function() {
    // move objects
    // draw game
    this.move();
    this.draw();
  };
  
  Game.prototype.start = function() {
    // use setInterval to call #step every 30 ms
    setInterval(this.step.bind(this), 30);
  };
  
  
})(this);