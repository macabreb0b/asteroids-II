(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
	
	this.pos[0] = (this.pos[0] + 500) % 500;
	this.pos[1] = (this.pos[1] + 500) % 500;
  };
  
  MovingObject.prototype.draw = function(ctx) {
    // takes in canvas context and draws circle of appropriate radius around pos
    var x = this.pos[0];
    var y = this.pos[1];
    
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 360);
    ctx.fill();
  };
  
  MovingObject.prototype.isCollidedWith = function(otherObject) {
    // add together radii, compare to distance between positions
    // return true / false
    var distance = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2) +
          Math.pow(this.pos[1] - otherObject.pos[1], 2));
          
    if (distance < (this.radius + otherObject.radius)) {
      return true;
    } else {
      return false;
    }
  };
  
  Function.prototype.inherits = function (BaseClass) {
    function Surrogate () {}
    Surrogate.prototype = BaseClass.prototype;
    this.prototype = new Surrogate();
  };
  
})(this);