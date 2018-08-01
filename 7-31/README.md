### ES6
http://es6-features.org/#Constants


### Filter
```javascript
var students = [
	{name: 'John Lennon', average: 90},
	{name: 'Ringo Starr', average: 58},
	{name: 'Paul McCartney', average: 82}
];

var passingStudents = students.filter(function(student){
  // Change from 50 to 60
	return student.average > 60;
});

passingStudents === [
	{name: 'John Lennon', average: 90},
	{name: 'Paul McCartney', average: 82}
];

// ES6 Arrow Function
const passingStudents = students.filter((student) => {
  return student.average > 60;
});

// Implicit returns (As seen on MDN)
const passingStudents = students.filter(student => student.average > 60)

```

### Find
```javascript
var students = [
	{name: 'John Lennon', average: 90},
	{name: 'Ringo Starr', average: 58},
	{name: 'Paul McCartney', average: 82}
];

var passingStudents = students.find(function(student){
	return student.average > 50;
});

// Should return a single object instead of an array
passingStudents === {
  name: 'John Lennon',
  average: 90,
};

// ES6 Arrow Function
const passingStudents = students.find((student) => {
  return student.average > 50;
})

// Implicit returns
const passingStudents = students.find(student => student.average > 50);
```

### Map
```javascript
var students = [
	{firstName: 'Cam', lastName: 'Newton'},
	{firstName: 'Ted', lastName: 'Ginn'},
	{firstName: 'Greg', lastName: 'Olsen'}
]

// missing .map()
var fullNames = students.map(function(student){
	return student.firstName + ' ' + student.lastName;
})

fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

// ES6 Arrow Functions
var fullNames = students.map((student) => {
  return student.firstName + ' ' + student.lastName;
})

// Implicit returns
var fullNames = students.map(student => student.firstName + ' ' + student.lastName);
```

### String Interpolation
```javascript
var firstName = 'Forrest'
var lastName = 'Guilloud'

var fullName = firstName + ' ' + lastName
var fullNameInterpolated = `${firstName} ${lastName}`
```

### Exercise 2 Issue:
```javascript
players
.filter(function(player){
  return player.position =='RB';
})
.reduce(function(total, player){
  total += player.touchdowns;
  // Missing `return total`
  return total
},0)
```