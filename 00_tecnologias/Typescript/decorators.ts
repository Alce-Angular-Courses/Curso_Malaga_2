function course(target) {
	Object.defineProperty(
		target.prototype, 
		'course', 
		{value: () => "Angular 2"}
	)
}

@course
class Person {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let oPersona = new Person("Pepe", "Pérez");
console.log(oPersona.course()); // Angular 2

function Student(config) { 
	return function (target) {
		Object.defineProperty(
			target.prototype,
			'course',
			{value: () => config.course} 
		)
	}
}

@Student({
	course: "Angular 2"
})
class Persona {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let oEstudiante = new Persona("Pepe", "Pérez");
console.log(oEstudiante.course()); // Angular 2