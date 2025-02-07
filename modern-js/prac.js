// {
//     head: 'head',
//     body: 'body',
//     arr: [1,2,3,4,5,6,7,8]
// }

// 코드에 4,5 빼고 다른 숫자는 사용하지 않는다.
// three 객체를 만들자.

const one = {
    head: 'head',
    arr: [1, 2, 3]
}

const two = {
    body: 'body',
    arr: [6, 7, 8]
}

const threeArr = [...one.arr, 4, 5, ...two.arr]

const three = {
    head: one.head,
    body: two.body,
    arr: threeArr,
}
console.log(three)

// 내 답안:

// {
//     head: 'head',
//     body: 'body',
//     arr: [
//       1, 2, 3, 4,
//       5, 6, 7, 8
//     ]
//   }