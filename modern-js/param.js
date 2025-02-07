// rest parameter

// const test = function (first, second, ...others) {
//     console.log(first)
//     console.log(second)
//     console.log(others)
// }

// test(1, 2) // 1 2 []
// test(1, 2, 3, 4, 5) // 1 2 [ 3, 4, 5 ]

const test2 = function (...param) {
    console.log(param)
}
test2() // []
test2(1, 2) // [ 1, 2 ]