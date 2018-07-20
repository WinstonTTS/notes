## July 18th, 2018

Today we covered a lot..

The answers to the exercises that we came up can be found in this repo:
- [Exercise 1](exercise-1.js)
- [Exercise 2](exercise-2.js)

Traversing (navigating through) Objects and Arrays is tricky business, but we learned a lot of methods that can help us along the way:
#### [Array.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
```javascript
const students = ['Gabriel', 'Adam', 'Shay', 'Heather']

const indexOfAdam = students.indexOf('Adam') // 1

console.log(students[indexOfAdam]) // 'Adam'
```
#### [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
```javascript
const dogs = [
  {
    name: 'Leia',
    age: 4
  },
  {
    name: 'Kylo',
    age: 2
  },
  {
    name: 'Akiva',
    age: 12
  }
]

const oldDogs = dogs.filter(function(dog) {
  return dog.age > 10
})

console.log(oldDogs) // [ { name: 'Akiva', age: 12 } ]
```
[Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

[Array.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

[Array.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

[Array.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

[Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

[Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

[Array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

[Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

[Array.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

(That's a lot of Array methods!)

For navigating Objects, we learned about different ways to [Access Object Properties (keys)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

```javascript
const person = {
  firstName: 'Blake',
  lastName: 'Guilloud',
  pets: ['Kylo', 'Leia'],
  wife: {
    firstName: 'Carolyn',
    age: 27
  }
}

console.log(person.pets[0]) // 'Kylo'
console.log(person.wife.age) // 27 (Dot Notation)
console.log(person.wife['age']) // 27 (Bracket Notation)
```

We also learned about how to add, change, or delete properties on an object:
```javascript
const food = {
  name: 'Eggplant'
}

food.delicious = false

console.log(food) // { name: 'Eggplant', delicious: false }
```