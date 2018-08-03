
function Particle(startX, startY) {
  this.x = startX;
  this.y = startY;
  this.velocity = {
    x: 0,
    y: 0
  };
}

const particles = [];

for (let i = 0; i <= 99; i++) {
  // push new particle into particles
  const newPart = new Particle(i, Math.random() * 500);

  particles.push(newPart)
}

console.log(particles)
