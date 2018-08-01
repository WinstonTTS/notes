const superHeroes = [
  ['Batman', 'Bruce Wayne'],
  ['Spiderman', 'Peter Parker'],
  ['The Flash', 'Barry Allen']
];

const secretIdentity = superHeroes.map((revealArray) => {
  return revealArray.join(' is ')
})


console.log(secretIdentity.join('\n'))

// Implicit Returns
// const secretIdentity = superHeroes.map((revealArray) => revealArray.join(' is '));
