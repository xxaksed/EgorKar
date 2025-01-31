var numbers = [13, 345, 1, 234, 23, 2, 3, 6, 5, 4567, 32, 45, 5, 43, 10];

// // alg #1
// // two numbers sum!!!
// // twoNumbersSum(numbers, 3); // => [1, 2]

function twoNumSum(array, num) {
    let searchDeff = new Map()
    for (let i = 0; i < array.length; i++) {
        let deff = num - array[i]
        if (searchDeff.has(deff)) {
            console.log(deff, array[i])
        }
        searchDeff.set(array[i], i)
    }
    // console.log(searchDeff)
}
twoNumSum(numbers, 235)


// // alg #2
var string = "Hello my friend! How're you! I am fine, thx";
// // // foo(string) => {h: 3, f:3, *space: 5}
function countSymb(array) {
    let SymbMap = new Map()
    for (let i = 0; i < array.length; i++) {
        if (SymbMap.has(array[i])) {
            SymbMap.set(array[i], SymbMap.get(array[i]) + 1)
        }
        else {
            SymbMap.set(array[i], 1)
        }
    }
    // console.log(SymbMap)
    let result = Object.fromEntries(SymbMap)
    console.log(result)
}
countSymb(string)


// // alg #3*
var integers = [1, 234, 3, 34, , 34, 343, 653, 345, 35, 3, 3];
// // foo(integers) => length
// // I am not allow to use length!
// // for !or! do while
function fooLength(array) {
    let counter = 0
    for (let i = 0; i < array.length; i++) {
        counter++
    }
    console.log(counter)
}
fooLength(integers)


// // OPTIONAL Кто хочет может визуализировать каждый из этих алгоритмов как он хочет!

