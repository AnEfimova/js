/**
 * Написать конструктор Person, который по полученному имени и фамилии создает объект с этими полями и уникальным идентификатором. Этот объект также должен содержать в себе метод fullName, склеивающий имя и фамилию, и метод greeting, возвращающий строку вида Hello, I'm ${fullName}

 Написать console.assert, проверяющий, что объект был
 создан именно конструктором Person.
 */
function Person (name, surname, id) {
    // сохранить итератор, static
    this.name = name;
    this.surname = surname;
    this.id = id;
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

let person_1 = new Person('Tom', 'Clark', getId())
let person_2 = new Person ('Linda', 'Linda', getId())
console.log(person_1.id)
console.log(person_2.id)
console.log(person_1.fullName())
console.log(person_2.fullName())
console.log(person_1.greeting())
console.assert(person_1 instanceof Person)
