(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var MovingObject = Asteroids.MovingObject;
  
  var Asteroid = Asteroids.Asteroid = function(pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.radius = Asteroid.RADIUS;
    this.color = Asteroid.COLOR;
  };
  
  Asteroid.inherits(MovingObject);
  
  Asteroid.COLOR = "blue";
  
  Asteroid.RADIUS = 5;
  
  Asteroid.randomVec = function() {
    return [(Math.random() * 11) - 5, (Math.random() * 11) - 5];
  };
  
  Asteroid.randomAsteroid = function(dimX, dimY) {
    var randomX = Math.floor((Math.random() * dimX) + 1);
    var randomY = Math.floor((Math.random() * dimY) + 1);
    
    var velocity = Asteroid.randomVec();
    
    return new Asteroid([randomX, randomY], velocity);
  };
  
})(this);