function Weapon(type, damage) {
  this.type = type || 'sword';
  this.damage = damage || 10;
}

function Hero(damage, name, health, type) {
  this.weapon = new Weapon(type, damage)
  this.name = name || 'Has no name';
  this.health = health || 50;
  this.attack = function(opponent) {
    opponent.health -= this.weapon.damage;
  }
}

const spiderman = new Hero(15, 'Peter', 40, 'webs')
const ultron = new Hero(300, 'Ultron', 500, 'laserbeams')

// Attack Ultron
spiderman.attack(ultron)
// Remove spiderman.damage from ultron's health pool
// Console.log ultron