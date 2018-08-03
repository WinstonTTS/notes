function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
  this.velocity = {
    x: 0,
    y: 0
  };
}

Particle.prototype = {
  getVelocity: function() {
    return time * gravity;
  },
  move: function() {
    this.y += this.getVelocity();
  }
}
const particles = [];

for (let i = 0; i <= 99; i++) {
  // push new particle into particles
  const newPart = new Particle(i, Math.random() * 500);

  particles.push(newPart)
}

let time = 2;
const gravity = 0.5;


particles.forEach((item) => {
  console.log('Before move: ', item.y)

  item.move();

  console.log('After move : ', item.y)
})