//complete this code
class Person {
	constructor(myName,myAge){
		this.name = myName;
		this.age = myAge;
	}
	get name(){
		return this.name;
	}
	set age(newAge){
		this.age = newAge;
	}
	get age(){
		return this.age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
