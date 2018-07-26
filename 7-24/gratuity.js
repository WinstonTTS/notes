// Exercise 1:

function gratuity(number) {
  return number * 0.2
}

function totalWithGrat(amount) {
  const grat = gratuity(amount)

  return amount + grat
}

console.log('Your total including gratuity is: ' + totalWithGrat(400).toFixed(2))
