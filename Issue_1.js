/**
 * Создаем объект utilityObject, содержащий в себе метод map, работающий для объекта, имеющий сигнатуру (key, value) =>
 * [key, value].
 Этот метод будет использоваться для формирования нового объекта на основе текущего.
 Создаем объект properties, который наследует utilityObject и содержит в себе несколько произвольных ключей, значения которых охватывают все примитивные типы данных в js. Написать console.assert, который проверяет, что объект properties действительно наследует utilityObject.
 */
const utilityObject = {
    // map: вызовет ключ значение и сгенерирует пару
    // a: 2, b:3 ->
    // A: 4, B:9
    // в map передать функцию,
    map: function(mapper) {
        const obj = {}
        Object.keys(this).forEach(key => {
            const [newKey, newValue] = mapper(key, this[key])

            obj[newKey] = newValue
        })
        return obj
    }
};

const properties = Object.create(utilityObject, {
    string: { value: 'string',
        enumerable: true},
    number: { value: 16,
        enumerable: true},
    boolean: { value: true,
        enumerable: true},
    symbol: { value: Symbol('temp'),
        enumerable: false},
    null: { value: null,
        enumerable: true},
    undefined: { value: undefined,
        enumerable: true},
    bigint: { value: BigInt(1n),
        enumerable: true}
})

console.log(utilityObject.map((key, value) => [key.toUpperCase(), value*value]))
console.log(properties.map((key, value) => [key.toUpperCase(), value*value]))

console.log(properties.null)
console.assert(utilityObject.isPrototypeOf(properties),
    'utilityObject is not a prototype of properties')