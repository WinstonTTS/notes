Exercise 1:

```javascript
const header = document.querySelector('header')
console.log('Header : ', header)

const sections = document.querySelector('.col').children
console.log('Sections : ', sections)

const sections2 = document.querySelectorAll('section')
console.log('Sections 2: ', sections2)

const current = document.querySelector('.current')
console.log('Current : ', current)

const nextToCurrent = current.nextElementSibling
console.log('Next : ', nextToCurrent)

const previousH2 = current.previousElementSibling.firstChild
console.log('previous h2 ', previousH2)

const divParent = previousH2.parentElement.parentElement
console.log('Div Parent : ', divParent)

const sectionsOfH2s = Array.from(document.querySelectorAll('h2')).map((el) => {
  return el.parentElement;
})

console.log('sectionsOfH2s', sectionsOfH2s)
```