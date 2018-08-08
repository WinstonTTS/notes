```javascript
function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    // Should be `myelement` not `greeting`
    myelement.innerHTML= "Hello " + name + ", it's nice to meet you!";
}

greetOnLoad();
```

```javascript
var user = {
  name : "Shane",
  job : "instructor"
};

var storeUser = JSON.stringify(user);

localStorage.setItem('userInfo', storeUser);

localStorage.getItem('userInfo');
// "{"name":"Shane","job":"instructor"}"

var parsedData = JSON.parse(localStorage.getItem('userInfo'));

console.log(parsedData);
// {"name":"Shane","job":"instructor"}
```