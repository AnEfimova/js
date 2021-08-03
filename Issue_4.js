/**
 * Написать метод asyncMap, который принимает массив и функцию-маппер,
 * и возвращает промис, который резолвится новым массивом, когда весь массив
 * обработан, или если возникло исключение - реджектится с этим исключением.
 * Внутри себя asyncMap выполняет маппинг пачками для каждой тысячи элементов с
 * интервалом 500 мс. Замерить время работы функции на примере.
 */

const massive = ['one', 'two', 'three']

function asyncMap(m, fm) {
    const p = new Promise((resolve, reject) =>{
        const newMassive = []
        try {
            for (let i = 0; i < m.length; i += 1) {
                setTimeout(async () => {
                    // можно через async
                    console.log(fm(m.slice(i, i + 1)))
                    newMassive.push(fm(m.slice(i, i + 1)))
                }, 500)
            }
            resolve(newMassive)
        } catch {
            reject(newMassive)
        }
    })
    return p
}

console.log(asyncMap(massive, s => s.toString().toUpperCase()))