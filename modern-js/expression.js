// 조건 연산자 if문을 한 줄로 쓸 수 있다.

// if (condition) {
//     ...
// } else {
//     ...
// }

// console.log(1 < 2 ? '작다' : '크다')

// 스프레드 spread

const print = (...others) => {
    console.log(others)
}

const sumAll = (...numbers) => {
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    return sum
}
console.log(sumAll(1, 2, 3, 4))

const arr = [5, 6, 7]

console.log(sumAll(arr)) // 05,6,7 (string)
console.log(sumAll(...arr)) // 18