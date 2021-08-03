/**
 * Реализовать аналогичное поведение, используя class Person
 */
class Person {
    constructor(name, surname, id) {
        this.name = name;
        this.surname = surname;
        this.id = id;
    }
}

Person.prototype.fullName = function (){
    return `${this.name} ${this.surname}`;
}

Person.prototype.greeting = function() {
    return `Hello, I'm ${this.fullName()}`
}

function* _id (){
    for (let i=0; ; i++){
        yield i;
    }
}
const id = _id()
function getId() {
    return id.next().value
}

const person_1 = new Person('Tom', 'Clark', getId())
const person_2 = new Person('Linda', 'Linda', getId())
console.log(person_1)
console.log(person_2)
console.assert(person_1 instanceof Person)