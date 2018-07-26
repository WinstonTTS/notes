// Rock Paper Scissors Answer

// Define array
const hands = ['rock', 'paper', 'scissors'];

// // Define getHand function
function getHand() {
  const index = Math.floor(Math.random() * 3) // 0 || 1 || 2
  return hands[index]
}

// // Define Player objects
const playerOne = {
  name: 'Ned Stark',
  getHand: getHand // Assign the method `getHand` to each Player object.
}

const playerTwo = {
  name: 'Lil` finger',
  getHand: getHand
}

// // Define PlayRound function
function playRound(a, b) {
  const playerOneHand = a.getHand()
  const playerTwoHand = b.getHand()

  const tie = playerOneHand === playerTwoHand
  const playerOneWins =
    (playerOneHand === 'scissors' && playerTwoHand === 'paper') ||
    (playerOneHand === 'rock' && playerTwoHand === 'scissors') ||
    (playerOneHand === 'paper' && playerTwoHand === 'rock')

  if (tie) {
    console.log('Itz a tie!')
    return null
  } else if (playerOneWins) {
    console.log(a.name + ' wins!')
    return a
  } else {
    console.log(b.name + ' wins!')
    return b
  }
}

// // Define playGame function
function playGame(a, b, playUntil) {
  let playerOneScore = 0
  let playerTwoScore = 0

  while (playerOneScore < playUntil && playerTwoScore < playUntil) {
    const winner = playRound(a, b)

    if (winner === a) {
      playerOneScore += 1
    } else if (winner === b) {
      playerTwoScore += 1
    }
  }

  if (playerOneScore === playUntil) {
    console.log(a.name + ' wins game!')
  } else if (playerTwoScore === playUntil) {
    console.log(b.name + ' wins game!!')
  }
}

playGame(playerOne, playerTwo, 10)
