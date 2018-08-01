// Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
// Log the values of a and b in the inner function.
// Update the inner function to take two parameters named a and b.
// Pass a and b in as arguments when you execute inner().
// Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
// Inside the inner function, update a property of the b object.

function outer() {
  var a = 'eyy'
  var b = {
    name: 'blake'
  }
  var c = [1, 2, 3]

  function inner(a, b, c) {
    a = 'bahhh'
    b.name = 'Forrest'
    c.push(4)
    console.log(a)
    console.log(b)
  }

  inner(a, b, c)
  console.log(a)
  console.log(b)
  console.log(c)
}

outer()
