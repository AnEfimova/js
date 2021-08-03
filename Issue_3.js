/**
 * Есть объект вида obj. Необходимо реализовать функцию executor, которая будет принимать на вход объект такого вида и
 * запускать его метод mounted таким образом, что ему будут доступны через this методы, лежащие в подобъекте
 * methods(при этом, методы из данного объекта должны быть также привязаны к этому this). Данные, которые возвращает
 * метод data также должны быть доступны через этот this.
 */
const obj = {
    data() {
        console.log(this)
        return { number: 1 } },
    mounted(){
        console.assert(this.calculate(this.twiceNumber) === 2)
        },
    methods: {
        calculate(lambda){
            return lambda()
        },
        twiceNumber(){
            return this.number*2
        }
    }
}

function executor(obj){
    const vm = {
        ...obj.data()
    }

    for (let name in obj.methods){
        vm[name] = obj.methods[name].bind(vm)
    }

    return obj.mounted.call(vm)
}

executor(obj)
