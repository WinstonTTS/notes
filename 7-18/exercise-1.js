// Exercise 1

// List

const shoppingList = ['pop tarts', 'ramen noodles', 'coffee', 'chips', 'salsa']

shoppingList.push('fruit loops') // ['pop tarts', 'ramen noodles', 'coffee', 'chips', 'salsa', 'fruit loops']

const indexOfCoffee = shoppingList.indexOf('coffee') // 2

shoppingList.splice(indexOfCoffee, 1, 'fair trade coffee') // ['pop tarts', 'ramen noodles', 'fair trade coffee', 'chips', 'salsa', 'fruit loops']

shoppingList.splice(3, 2, 'rice', 'beans')

// Cart
const shoppingCart = []

const lastItemInList = shoppingList.pop() // 'fruit loops'

shoppingCart.push(lastItemInList) // ['fruit loops']

const firstItemInList = shoppingList.shift() // ['pop tarts']

shoppingCart.push(firstItemInList) // ['fruit loops', 'pop tarts']


while (shoppingList.length > 0) {
  const poppedItemFromList = shoppingList.pop()

  shoppingCart.push(poppedItemFromList)
}

shoppingCart.sort()

shoppingCart.reverse()

// Remember you can also "Chain" array methods as long as the method is returning a new array:
// shoppingCart.sort().reverse()

console.log(shoppingCart.join(', '))
