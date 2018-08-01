const players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

// Find player named `Mike`
const playerNamedMike = players.find(function(player) {
  return player.firstName === 'Mike'
})

// Get an array of all players with position `RB`
const runningBacks = players.filter(function(player) {
  return player.position === 'RB'
})

// Get an array of all the players lastNames
const lastNames = players.map(function(player) {
  return player.lastName
})

// Get an array of the full names of all the running backs with more than 5 touchdowns
const runningBacksWithMoreThanFiveTDs = players.filter(function(player) {
  return player.position === 'RB' && player.touchdowns > 5
}).map(function(player) {
  return `${player.firstName} ${player.lastName}`
})

// Get the number of touchdowns scored by Running backs
const numberOfTouchdownsScoredByRunningBacks = players.filter(function(player) {
  return player.position === 'RB'
}).reduce(function(sum, current) {
  return sum + current.touchdowns
}, 0)


