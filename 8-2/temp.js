function Teacher(name) {
	this.name = name;
	this.teach = function() {
		console.log(this.name + " says constructors are cool");
	}
}

class Teacher {
  constructor(name) {
    this.name = name;
    this.teach = function() {
      console.log(this.name + " says constructors are cool");
    }
  }
}




